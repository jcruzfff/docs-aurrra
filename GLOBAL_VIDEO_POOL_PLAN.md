# Global Video Metadata Pool - Future Implementation Plan

## Overview

Create a shared database of video/post metadata that all users contribute to and benefit from. When a user searches for content, we check our database first before calling external APIs (Apify), reducing costs and improving speed.

---

## Current State (Completed)

- **Image Caching**: Instagram thumbnails are cached to Supabase Storage
- **Per-Search API Calls**: Every search hits Apify, even for previously-searched accounts
- **No Metadata Persistence**: Search results are ephemeral (lost when user navigates away)

---

## Goals

1. **Reduce API Costs**: Avoid redundant Apify calls for recently-fetched content
2. **Faster Results**: Return cached results instantly, refresh in background
3. **Shared Knowledge**: All users benefit from discoveries made by other users
4. **Freshness Balance**: Keep data current without over-fetching

---

## Architecture

### Database Schema

```sql
-- Global pool of all discovered videos/posts
CREATE TABLE global_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Identity
  platform TEXT NOT NULL, -- 'instagram' | 'youtube' | 'tiktok'
  external_id TEXT NOT NULL, -- Platform-specific ID
  shortcode TEXT, -- Instagram shortcode, YouTube video ID
  url TEXT NOT NULL,
  
  -- Content
  title TEXT,
  caption TEXT,
  thumbnail_url TEXT, -- Original URL
  cached_thumbnail_url TEXT, -- Supabase Storage URL
  
  -- Metrics (updated on each fetch)
  view_count BIGINT,
  like_count BIGINT,
  comment_count BIGINT,
  share_count BIGINT,
  
  -- Creator info
  creator_username TEXT,
  creator_followers BIGINT,
  
  -- Computed scores
  outlier_score DECIMAL,
  engagement_rate DECIMAL,
  cross_niche_score DECIMAL,
  
  -- Metadata
  content_type TEXT, -- 'video' | 'image' | 'carousel'
  duration_seconds INTEGER,
  posted_at TIMESTAMPTZ,
  hashtags TEXT[],
  
  -- Freshness tracking
  first_discovered_at TIMESTAMPTZ DEFAULT NOW(),
  last_fetched_at TIMESTAMPTZ DEFAULT NOW(),
  fetch_count INTEGER DEFAULT 1,
  
  -- Indexes
  UNIQUE(platform, external_id)
);

-- Track which accounts/hashtags have been searched
CREATE TABLE search_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Search parameters
  platform TEXT NOT NULL,
  search_type TEXT NOT NULL, -- 'account' | 'hashtag' | 'keyword'
  search_term TEXT NOT NULL, -- '@hormozi' or '#entrepreneur'
  
  -- Filters used (for cache matching)
  min_likes INTEGER,
  max_days INTEGER,
  
  -- Freshness
  last_searched_at TIMESTAMPTZ DEFAULT NOW(),
  result_count INTEGER,
  
  UNIQUE(platform, search_type, search_term, min_likes, max_days)
);

-- Link searches to their results
CREATE TABLE search_results (
  search_id UUID REFERENCES search_cache(id) ON DELETE CASCADE,
  video_id UUID REFERENCES global_videos(id) ON DELETE CASCADE,
  position INTEGER, -- Order in results
  PRIMARY KEY (search_id, video_id)
);

-- Indexes for fast lookups
CREATE INDEX idx_global_videos_platform_creator ON global_videos(platform, creator_username);
CREATE INDEX idx_global_videos_hashtags ON global_videos USING GIN(hashtags);
CREATE INDEX idx_global_videos_outlier ON global_videos(outlier_score DESC);
CREATE INDEX idx_global_videos_posted ON global_videos(posted_at DESC);
CREATE INDEX idx_search_cache_lookup ON search_cache(platform, search_type, search_term);
```

### Caching Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Search Request                       │
│                    "@hormozi, minLikes=5000"                     │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      1. Check Search Cache                       │
│  "Has @hormozi been searched in last 24h with similar filters?" │
└─────────────────────────────────────────────────────────────────┘
                                │
                ┌───────────────┴───────────────┐
                │                               │
         Cache HIT                        Cache MISS
                │                               │
                ▼                               ▼
┌───────────────────────────┐   ┌───────────────────────────────┐
│ 2a. Return cached results │   │ 2b. Call Apify API            │
│     immediately           │   │     (fetch fresh data)        │
│                           │   │                               │
│ 3a. Background refresh    │   │ 3b. Upsert results to         │
│     if stale (>6h)        │   │     global_videos table       │
└───────────────────────────┘   │                               │
                                │ 4b. Update search_cache       │
                                │                               │
                                │ 5b. Link via search_results   │
                                └───────────────────────────────┘
```

### Freshness Rules

| Content Age | Cache Duration | Behavior |
|-------------|----------------|----------|
| < 24 hours | 1 hour | Refresh frequently (viral potential) |
| 1-7 days | 6 hours | Moderate refresh |
| 7-30 days | 24 hours | Daily refresh sufficient |
| > 30 days | 7 days | Weekly refresh (metrics stable) |

### API Response Strategy

```typescript
interface SearchResponse {
  results: Video[];
  meta: {
    source: 'cache' | 'api' | 'mixed';
    cacheAge: number; // seconds since last fetch
    isRefreshing: boolean; // background refresh in progress
    totalCached: number; // how many we have for this search
  };
}
```

**Stale-While-Revalidate Pattern:**
1. Return cached results immediately (fast UX)
2. If cache is stale, trigger background refresh
3. Frontend can poll or use SSE for fresh data

---

## Implementation Phases

### Phase 1: Database Setup
- [ ] Create `global_videos` table
- [ ] Create `search_cache` and `search_results` tables
- [ ] Add RLS policies (global_videos is public read, search_cache per-user optional)
- [ ] Create indexes for performance

### Phase 2: Write Path
- [ ] After Apify returns results, upsert to `global_videos`
- [ ] Update `search_cache` with search parameters
- [ ] Link results via `search_results` junction table
- [ ] Store cached thumbnail URL after image caching completes

### Phase 3: Read Path
- [ ] Before calling Apify, check `search_cache` for recent search
- [ ] If cache hit, return results from `global_videos`
- [ ] Implement freshness check and background refresh
- [ ] Add `source` metadata to response

### Phase 4: Smart Refresh
- [ ] Background job to refresh stale popular content
- [ ] Priority queue: high-outlier videos refresh more often
- [ ] Batch Apify calls efficiently (multiple accounts per request)

### Phase 5: Cross-User Benefits
- [ ] "Trending" section from most-viewed cached content
- [ ] "Recently Discovered" feed
- [ ] Search suggestions based on cached accounts/hashtags

---

## Performance Considerations

### Query Optimization
```sql
-- Fast lookup for account search
SELECT gv.* FROM global_videos gv
JOIN search_results sr ON sr.video_id = gv.id
JOIN search_cache sc ON sc.id = sr.search_id
WHERE sc.platform = 'instagram'
  AND sc.search_type = 'account'
  AND sc.search_term = '@hormozi'
  AND sc.last_searched_at > NOW() - INTERVAL '24 hours'
ORDER BY sr.position;
```

### Caching Layers
1. **Supabase** - Primary storage
2. **Edge Cache** - Vercel/CDN for hot data
3. **Client Cache** - React Query/SWR with stale-while-revalidate

### Cost Analysis
- **Apify**: ~$0.50 per 1000 posts scraped
- **Supabase**: ~$0.021 per GB storage, generous free tier
- **Savings**: 10 users searching @hormozi = 1 API call instead of 10

---

## Future Enhancements

### Analytics Dashboard
- Most searched accounts
- Trending hashtags
- Cache hit rate metrics

### Smart Recommendations
- "Users who searched X also found value in Y"
- Auto-discover related accounts

### Export & Sync
- Export collections with full metadata
- Sync with external tools (Notion, Airtable)

### Multi-Platform Unification
- Normalize YouTube, Instagram, TikTok into unified schema
- Cross-platform trending analysis

---

## Notes

- Start simple: cache results for 24h, no background refresh initially
- Monitor Supabase usage to ensure we stay within limits
- Consider rate limiting searches to prevent abuse
- Keep image caching separate (current implementation) - it's working well
