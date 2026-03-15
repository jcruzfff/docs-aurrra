# Google Drive Video Sorter - Implementation Plan

> **Status**: Parked - Resume when files are consolidated to single account

## Overview

Automatically sort ~300 video clips into 12 category folders using AI classification.

## Categories

| # | Folder Name |
|---|-------------|
| 01 | Work & Focus |
| 02 | Walking & Movement |
| 03 | Wellness & Spiritual |
| 04 | Travel & Transit |
| 05 | Nature & Scenery |
| 06 | Home & Lifestyle |
| 07 | Food & Drink |
| 08 | Fitness & Sports |
| 09 | Adventure & Adrenaline |
| 10 | Social & Relationships |
| 11 | Creator & BTS |
| 12 | Identity & Signature |

## Approach

### Phase 1: Classify (~25 min, ~$1)
- List all videos in source folder via Drive API
- For each video:
  - Stream first 30-60 seconds
  - Send to Gemini 2.0 Flash for classification
  - AI returns category + confidence score
- Output: `decisions.csv` with all classifications

### Phase 2: Review (~5 min)
- Review CSV for any obvious errors
- Flag low-confidence items for manual review

### Phase 3: Move (~5 min)
- Read approved decisions
- Use Drive API to move each file to correct folder
- Moves are instant (same account = metadata change only)

## Prerequisites

When ready to implement:

1. **Folder IDs needed:**
   - Source folder ID (where raw clips are)
   - 12 destination folder IDs (one per category)

2. **Credentials:**
   - Google Drive API credentials (already have `credentials.json` in project)
   - Gemini API key (already configured)

3. **Install dependencies:**
   ```bash
   pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
   ```

## Estimated Cost

| Item | Cost |
|------|------|
| Gemini API (300 videos × 30s) | ~$0.50-1.00 |
| Google Drive API | Free |
| **Total** | **< $2** |

## Script Location

When implemented: `execution/sort_gdrive_videos.py`

## Notes

- Only analyzes first 30-60 seconds (enough to classify content)
- Generates report before moving anything
- Can run in dry-run mode to preview decisions
- Handles edge cases: low confidence → flags for manual review
