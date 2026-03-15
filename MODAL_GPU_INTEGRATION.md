# Modal.com GPU Integration (Phase 4)

> **Status**: FUTURE - Only implement when needed for scale

## When to Add Modal

Add Modal.com integration when:

1. **AssemblyAI + Railway are not enough** - Processing time is still too slow
2. **Videos over 30 minutes** are common - Railway may timeout
3. **4K video support** is needed - Requires more memory
4. **Premium features** like face tracking, AI B-roll - Require GPU

## Why Modal Over More Railway Resources

| Factor     | Railway (more RAM) | Modal.com        |
| ---------- | ------------------ | ---------------- |
| Cost       | $20-50/month fixed | $0.10-0.50/video |
| Memory     | Up to 8GB          | Unlimited        |
| GPU        | Not available      | T4, A100, etc.   |
| Cold start | Always on          | ~1-2 seconds     |
| Scaling    | Manual             | Automatic        |

**Recommendation**: Only add Modal if you need GPU or have >100 videos/month

## Architecture with Modal

```
User Submits Video
       │
       ▼
    Inngest
       │
       ├── Video < 10 min? ──► Railway (CPU) ──► Supabase
       │
       └── Video ≥ 10 min? ──► Modal (GPU) ──► Supabase
```

## Implementation Steps (When Ready)

### 1. Create Modal Account

```bash
pip install modal
modal token new
```

### 2. Create Modal Function

```python
# modal_video.py
import modal

app = modal.App("content-engine-video")

@app.function(
    image=modal.Image.debian_slim().pip_install("ffmpeg-python"),
    gpu="T4",  # Or "A100" for heavy work
    timeout=1800,  # 30 min max
)
def process_video(input_url: str, options: dict) -> str:
    # Download video
    # Process with FFmpeg (GPU-accelerated)
    # Upload to Supabase
    # Return output URL
    pass
```

### 3. Modify Inngest Function

```typescript
// src/inngest/functions/video-edit.ts

const result = await step.run('process-video', async () => {
  const videoDuration = /* get duration */;

  if (videoDuration > 600) {  // 10 minutes
    // Use Modal for long videos
    return await fetch('https://your-modal-app.modal.run/process', {
      method: 'POST',
      body: JSON.stringify({ videoUrl, options }),
    }).then(r => r.json());
  } else {
    // Use Railway for short videos
    return await fetch(`${PYTHON_SERVICE_URL}/video-edit`, { ... });
  }
});
```

### 4. Set Up Secrets in Modal

```bash
modal secret create assemblyai ASSEMBLYAI_API_KEY=xxx
modal secret create supabase SUPABASE_URL=xxx SUPABASE_KEY=xxx
```

## Cost Estimates with Modal

| Video Length | Railway Only | Railway + Modal |
| ------------ | ------------ | --------------- |
| 5 min video  | ~$0.01       | ~$0.01          |
| 15 min video | May timeout  | ~$0.15          |
| 30 min video | Fails        | ~$0.30          |
| 1 hour video | Fails        | ~$0.60          |

## When NOT to Use Modal

- Videos under 10 minutes (Railway is fine)
- Budget is very tight (Modal adds cost per video)
- You don't need GPU features (face tracking, etc.)

## Conclusion

Phase 4 is optional. With Phases 2 (Inngest background jobs) and 3 (AssemblyAI), you can handle most creator workflows. Only add Modal when you have paying customers who need longer video support or GPU features.
