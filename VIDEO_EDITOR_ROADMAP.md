# Video Editor Roadmap

> Goal: Build the best AI video editor for content creators - remove silences, detect mistakes, enhance audio, all automatically.

## Current State (January 2026)

### ✅ Working Features
- **Silence Removal** - Silero VAD (AI-powered speech detection)
- **Restart Detection** - Whisper AI finds "cut cut" phrases and removes retakes
- **Audio Enhancement** - EQ, compression, loudness normalization (-16 LUFS)
- **LUT Color Grading** - Apply .cube files for color correction
- **Swivel Intro** - 3D transition effect via Remotion (needs testing)
- **Cloud Storage** - Supabase Storage for input/output videos
- **Stats Display** - Silences removed, time saved, file size

### ⚠️ Current Limitations
| Factor | Limit | Impact |
|--------|-------|--------|
| Video length | ~10 min max | Longer videos timeout |
| Processing time | ~5 min per 1 min video | Users wait a long time |
| Whisper (restarts) | Very slow on CPU | Adds 3-5 min to processing |
| Railway timeout | 10 min default | Long videos fail |
| Memory | ~2GB | Can't handle 4K well |

---

## Phase 1: Quick Wins (This Week)

### 1.1 Increase Timeout
- [ ] Set Railway timeout to 15 minutes
- [ ] Add progress indicator for long videos
- [ ] Show estimated time remaining

### 1.2 Better Error Handling
- [ ] Catch timeout errors gracefully
- [ ] Suggest shorter video if timeout occurs
- [ ] Add retry button

### 1.3 Video Length Warning
- [ ] Detect video duration before processing
- [ ] Warn if >5 min: "This may take 10-15 minutes"
- [ ] Warn if >15 min: "Consider splitting your video"

---

## Phase 2: Background Processing (Next Sprint)

### 2.1 Inngest Background Jobs
Move video processing to background queue:

```
Current:  User waits → Processing → Download
Future:   User submits → Gets job ID → Notification when done
```

**Benefits:**
- User can close browser
- No timeout issues
- Can process 30+ min videos
- Better UX

**Implementation:**
- [ ] Create Inngest function for video-edit
- [ ] Add job status tracking in Supabase
- [ ] Build "My Videos" page to see processing status
- [ ] Email notification when complete (optional)

### 2.2 Job Status UI
```
/videos page showing:
- Queued jobs
- Processing jobs (with progress %)
- Completed jobs (with download link)
- Failed jobs (with error + retry)
```

---

## Phase 3: Faster Transcription (2-3 Weeks)

### 3.1 Replace Local Whisper with Cloud API

**Current:** Local Whisper on CPU = very slow
**Future:** Cloud transcription API = fast + scalable

**Options:**
| Service | Cost/min | Speed | Quality |
|---------|----------|-------|---------|
| AssemblyAI | $0.002 | Real-time | Excellent |
| Deepgram | $0.004 | Real-time | Great |
| OpenAI Whisper | $0.006 | Fast | Excellent |

**Recommendation:** Start with **AssemblyAI**
- Best price/performance
- Great accuracy
- Speaker diarization included
- Webhooks for async processing

**Implementation:**
- [ ] Sign up for AssemblyAI
- [ ] Replace Whisper calls with API calls
- [ ] Handle async transcription with webhooks
- [ ] Remove PyTorch/Whisper from Docker (smaller image!)

---

## Phase 4: GPU Processing (1-2 Months)

### 4.1 Modal.com Integration
Serverless GPU for heavy processing:

```
User uploads → Modal GPU spins up → Process in 2 min → Shut down
```

**Benefits:**
- 10-100x faster processing
- Pay per second (~$0.10-0.50/video)
- No memory limits
- Can handle 4K, long videos

**Use Cases:**
- Whisper transcription (if not using cloud API)
- Video re-encoding
- Future AI features (face tracking, b-roll suggestions)

### 4.2 Chunked Processing
For very long videos (30+ min):

```
30 min video → Split into 6x 5-min chunks
→ Process chunks in parallel
→ Stitch back together
```

**Benefits:**
- 6x faster (parallel processing)
- Lower memory per chunk
- Can handle any length video

---

## Phase 5: Premium Features (Future)

### 5.1 Smart B-Roll Suggestions
- Analyze transcript for keywords
- Suggest stock footage from Pexels/Unsplash
- One-click insert at timestamp

### 5.2 Auto Captions
- Generate SRT from transcription
- Burn-in captions with custom styling
- Export separate SRT file

### 5.3 Multi-Track Editing
- Separate audio/video tracks
- Background music with auto-ducking
- Sound effects library

### 5.4 Face Tracking Zoom
- Detect speaker face
- Auto-zoom/pan to keep face centered
- Ken Burns effect on static shots

### 5.5 Thumbnail Extraction
- Find best frames automatically
- Face detection + expression analysis
- Generate multiple thumbnail options

---

## Technical Debt to Address

- [ ] Remove unused video_editor.py (deleted custom script)
- [ ] Clean up Docker image (remove unused dependencies)
- [ ] Add proper logging/monitoring (Sentry?)
- [ ] Add video processing metrics (avg time, success rate)
- [ ] Set up proper error alerting

---

## Cost Projections

### Current (Low Volume)
- Railway Hobby: $5/month
- Supabase Free: $0/month
- **Total: ~$5/month**

### Growth (100 videos/month)
- Railway Pro: $20/month
- Supabase Pro: $25/month
- AssemblyAI: ~$10/month (500 min)
- **Total: ~$55/month**

### Scale (1000 videos/month)
- Railway/Modal: ~$100/month
- Supabase: ~$50/month
- AssemblyAI: ~$60/month (5000 min)
- **Total: ~$210/month**

---

## Priority Order

1. **Phase 1** - Quick wins (improve current UX)
2. **Phase 2** - Background jobs (unlock long videos)
3. **Phase 3** - Cloud transcription (10x faster)
4. **Phase 4** - GPU processing (scale to any video)
5. **Phase 5** - Premium features (differentiation)

---

*Last updated: January 14, 2026*
