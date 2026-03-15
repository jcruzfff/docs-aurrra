# Production Migration - The Journey

> Date: January 8, 2026
> Session: Major architecture overhaul for production deployment

---

## 🔴 BEFORE: Local-Only Architecture

### How It Worked

```
┌─────────────────────────────────────────────────────────────────┐
│                    LOCAL DEVELOPMENT ONLY                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    Next.js App                           │  │
│   │                                                          │  │
│   │   API Route (e.g., /api/workflows/youtube-research)     │  │
│   │              │                                           │  │
│   │              ▼                                           │  │
│   │   ┌────────────────────────────────────┐                │  │
│   │   │  child_process.spawn('python3',    │                │  │
│   │   │    ['execution/script.py', args])  │                │  │
│   │   └────────────────────────────────────┘                │  │
│   │              │                                           │  │
│   │              ▼                                           │  │
│   │   Local Python process runs                              │  │
│   │   Reads/writes to local filesystem                       │  │
│   │   Uses local .venv for dependencies                      │  │
│   │                                                          │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### The Problem

**This couldn't deploy to Vercel because:**

1. **No Python runtime** - Vercel serverless functions don't have Python
2. **No filesystem** - Serverless functions are stateless, no local files
3. **No child_process** - Can't spawn subprocesses in serverless
4. **No FFmpeg** - System binaries not available
5. **Execution timeout** - Vercel has 10s limit (60s on Pro), our scripts take minutes

### What Each Route Looked Like (BEFORE)

```typescript
// src/app/api/workflows/youtube-research/route.ts (BEFORE)
import { spawn } from "child_process";
import { getPythonPath, getExecutionDir } from "@/lib/python-path";

export async function POST(request: NextRequest) {
  const pythonPath = getPythonPath();  // Points to local .venv
  
  const process = spawn(pythonPath, [
    path.join(getExecutionDir(), "scrape_cross_niche_tubelab.py"),
    "--keywords", keywords,
    "--limit", String(limit),
  ]);
  
  process.stdout.on("data", (data) => {
    // Stream output to client
  });
}
```

### Files That Used spawn() - The Old Way

| File | Script Called | Purpose |
|------|---------------|---------|
| `/api/analyze/route.ts` | `analyze_video.py` | Video analysis |
| `/api/scripts/research/route.ts` | `generate_research.py` | Research reports |
| `/api/scripts/generate/route.ts` | `generate_script.py` | Script generation |
| `/api/workflows/youtube-research/route.ts` | `scrape_cross_niche_tubelab.py` | YouTube outliers |
| `/api/workflows/instagram-research/route.ts` | `instagram_outlier_research.py` | Instagram research |
| `/api/workflows/voice-avatar/route.ts` | `voice_avatar_generator.py` | Voice + Avatar |
| `/api/workflows/thumbnail/route.ts` | `recreate_thumbnails.py` | Thumbnails |
| `/api/workflows/video-edit/route.ts` | `simple_video_edit.py` | Video editing |
| `/api/workflows/analyze-photos/route.ts` | `analyze_face_directions.py` | Face analysis |
| `/api/channels/discover/route.ts` | `discover_accounts.py` | Channel discovery |

---

## 🟢 AFTER: Production-Ready Architecture

### How It Works Now

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   VERCEL (Next.js)              RAILWAY (Python)               │
│   ┌─────────────────┐          ┌─────────────────────────┐     │
│   │                 │          │                         │     │
│   │  API Route      │  HTTP    │  FastAPI Service        │     │
│   │                 │ ──────►  │  (python-service/)      │     │
│   │  fetch(         │  POST    │                         │     │
│   │    PYTHON_URL + │          │  All Python logic       │     │
│   │    '/analyze'   │          │  lives here now         │     │
│   │  )              │          │                         │     │
│   │                 │  ◄────── │  Returns JSON           │     │
│   │  Stream to      │  JSON    │                         │     │
│   │  client via SSE │          │  Has: FFmpeg, MediaPipe │     │
│   │                 │          │       OpenCV, etc.      │     │
│   └─────────────────┘          └─────────────────────────┘     │
│          │                              │                       │
│          │                              │                       │
│          ▼                              ▼                       │
│   ┌─────────────────┐          ┌─────────────────────────┐     │
│   │    Supabase     │          │    External APIs        │     │
│   │    Database     │          │    - Claude             │     │
│   │    Auth         │          │    - TubeLab            │     │
│   └─────────────────┘          │    - Apify              │     │
│                                │    - ElevenLabs         │     │
│                                │    - HeyGen             │     │
│                                │    - Google Genai       │     │
│                                └─────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### What Each Route Looks Like (AFTER)

```typescript
// src/app/api/workflows/youtube-research/route.ts (AFTER)
const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL;
const PYTHON_SERVICE_SECRET = process.env.PYTHON_SERVICE_SECRET;

export async function POST(request: NextRequest) {
  // Call Railway Python service instead of spawning local process
  const response = await fetch(`${PYTHON_SERVICE_URL}/youtube-research`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${PYTHON_SERVICE_SECRET}`,
    },
    body: JSON.stringify({ keywords, limit }),
  });
  
  const result = await response.json();
  // Stream result to client via SSE
}
```

---

## The Migration: Step by Step

### Step 1: Created Python Service Directory

```
python-service/
├── main.py              # FastAPI app with ALL endpoints
├── requirements.txt     # Python dependencies
├── Dockerfile          # Docker build for Railway
└── pyrightconfig.json  # IDE config
```

### Step 2: Ported All Python Logic to FastAPI

The `main.py` file (1296 lines) contains:

| Endpoint | Function | Original Script |
|----------|----------|-----------------|
| `POST /analyze` | `run_video_analysis()` | `analyze_video.py` |
| `POST /research` | `generate_research_report()` | `generate_research.py` |
| `POST /youtube-research` | `search_tubelab_outliers()` | `scrape_cross_niche_tubelab.py` |
| `POST /instagram-research` | Uses ApifyClient | `instagram_outlier_research.py` |
| `POST /generate-script` | `generate_script()` | `generate_script.py` |
| `POST /voice-avatar` | ElevenLabs + HeyGen | `voice_avatar_generator.py` |
| `POST /discover` | ApifyClient search | `discover_accounts.py` |
| `POST /analyze-photo` | `get_face_pose_from_image()` | `analyze_face_directions.py` |
| `POST /thumbnail` | Google Genai | `recreate_thumbnails.py` |
| `POST /video-edit` | FFmpeg subprocess | `simple_video_edit.py` |
| `GET /voices` | ElevenLabs list | `voice_avatar_generator.py` |
| `GET /avatars` | HeyGen list | `voice_avatar_generator.py` |

### Step 3: Updated All Next.js API Routes

Changed from `spawn()` to `fetch()`:

```diff
- import { spawn } from "child_process";
- import { getPythonPath } from "@/lib/python-path";
+ const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL;

- const proc = spawn(pythonPath, [scriptPath, ...args]);
+ const response = await fetch(`${PYTHON_SERVICE_URL}/endpoint`, {
+   method: 'POST',
+   headers: { 'Authorization': `Bearer ${secret}` },
+   body: JSON.stringify(data),
+ });
```

### Step 4: Set Up Railway Deployment

1. Created new Railway project
2. Set root directory to `python-service`
3. Railway auto-detected Dockerfile
4. Added all environment variables
5. Generated public domain: `content-engine-production-fc98.up.railway.app`

### Step 5: Connected Vercel to Railway

Added to Vercel environment:
```
PYTHON_SERVICE_URL=https://content-engine-production-fc98.up.railway.app
PYTHON_SERVICE_SECRET=your-shared-secret
```

---

## Dependencies Installed on Railway

```txt
# FastAPI and server
fastapi==0.115.0
uvicorn[standard]==0.30.0
python-dotenv==1.2.1
pydantic==2.12.5

# APIs and clients
anthropic==0.75.0
apify_client==2.3.0
youtube-transcript-api==1.2.3
httpx==0.28.1
requests==2.32.5

# Image processing
opencv-python-headless==4.10.0.84
mediapipe==0.10.18
numpy>=1.23.5,<2
Pillow==11.2.1

# Google AI (thumbnails)
google-genai==1.14.0
```

Plus system packages from Dockerfile:
- `ffmpeg` (video processing)

---

## What's Preserved

### Original Python Scripts Still Exist

The `execution/` folder is untouched:
- Can still run locally: `python execution/analyze_video.py --url "..."`
- Serves as reference implementation
- Could be used for local-only development

### SSE Streaming Pattern Preserved

The frontend still receives real-time logs:
```typescript
// Client-side - unchanged
const eventSource = new EventSource('/api/workflows/youtube-research');
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'log') console.log(data.message);
  if (data.type === 'complete') handleResult(data);
};
```

### Authentication Added

Railway endpoints require API key:
```python
def verify_api_key(authorization: str = Header(None)):
    expected_key = os.getenv("PYTHON_SERVICE_SECRET")
    if token != expected_key:
        raise HTTPException(status_code=403, detail="Invalid API key")
```

---

## Summary

| Aspect | Before | After |
|--------|--------|-------|
| **Python execution** | Local `spawn()` | Railway HTTP API |
| **Deployable** | ❌ Local only | ✅ Vercel + Railway |
| **Python dependencies** | Local `.venv` | Railway Docker |
| **FFmpeg** | Local install | Docker container |
| **Scalability** | Single machine | Cloud infrastructure |
| **Auth** | None | Bearer token |
| **Cost** | Free (local) | Railway ($5/mo hobby) |

---

## Files Changed in This Migration

### New Files Created
- `python-service/main.py` (1296 lines)
- `python-service/requirements.txt`
- `python-service/Dockerfile`
- `python-service/pyrightconfig.json`
- `docs/PRODUCTION_MIGRATION.md` (this file)

### Files Modified
- `src/app/api/analyze/route.ts`
- `src/app/api/scripts/research/route.ts`
- `src/app/api/scripts/generate/route.ts`
- `src/app/api/workflows/youtube-research/route.ts`
- `src/app/api/workflows/instagram-research/route.ts`
- `src/app/api/workflows/youtube-script/route.ts`
- `src/app/api/workflows/shortform-script/route.ts`
- `src/app/api/workflows/voice-avatar/route.ts`
- `src/app/api/workflows/thumbnail/route.ts`
- `src/app/api/workflows/video-edit/route.ts`
- `src/app/api/workflows/analyze-photos/route.ts`
- `src/app/api/channels/discover/route.ts`
- `src/app/api/channels/[id]/videos/route.ts` (removed unused import)
- `PROJECT_STATUS.md`

### Files Unchanged
- All `execution/*.py` scripts (preserved as reference)
- All frontend components
- Database schema
- Supabase configuration

---

## Tomorrow's Testing Plan

1. **Auth Flow**: Sign up → Create project → Verify RLS
2. **Video Analysis**: Paste URL → Get breakdown
3. **YouTube Research**: Keywords → Outlier results
4. **Instagram Research**: Handles → Viral posts
5. **Script Generation**: Research → Script output
6. **Voice/Avatar**: Test ElevenLabs + HeyGen
7. **Thumbnail**: Test Google Genai
8. **Video Edit**: Test FFmpeg processing

Good night! 🌙
