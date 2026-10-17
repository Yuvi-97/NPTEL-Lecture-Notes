# 🛠️ NPTEL Transcript, Video Harvesting & AI Notes Toolset

This directory contains the essential, production-ready tools for harvesting complete transcripts, scraping lecture video metadata, and generating concise exam-focused revision notes with AI.

---

## 📂 Directory Contents

| File / Folder | Type | Purpose | When to Use |
|---|---|---|---|
| [`generate_notes_ai.py`](file:///d:/Nptel%20Notes/scripts/generate_notes_ai.py) | Python CLI | **AI Revision Notes Generator** using your exact prompt | Converts transcripts JSON directly into Markdown notes (`frontend/src/notes/...`) |
| [`data/`](file:///d:/Nptel%20Notes/scripts/data) | Folder (Data) | Stores harvested transcript JSONs & metadata | Source files for AI notes generation |
| [`nptel_transcript_harvester.js`](file:///d:/Nptel%20Notes/scripts/nptel_transcript_harvester.js) | Browser (DevTools) | Automates Radix UI language dropdown on NPTEL portal | When NPTEL course has on-page transcripts tab (e.g. *Logistics & SCM*) |
| [`nptel_archive_transcript_fetcher.py`](file:///d:/Nptel%20Notes/scripts/nptel_archive_transcript_fetcher.py) | Python CLI | Directly fetches verbatim transcripts from NPTEL digital archive | When course has NO on-page transcripts or YouTube videos are unlisted |
| [`nptel_video_id_harvester.js`](file:///d:/Nptel%20Notes/scripts/nptel_video_id_harvester.js) | Browser (DevTools) | Maps all lectures to YouTube Video IDs & URLs | To quickly scrape all 60 lecture video IDs from any NPTEL course |

---

## 1. `generate_notes_ai.py` (AI Revision Notes Generator)

### What it does:
- Reads your harvested transcripts JSON from `scripts/data/` (or current directory).
- Uses your exact 4-section exam-focused prompt:
  - `## 1. Key Concepts`
  - `## 2. Important Points`
  - `## 3. Differences / Examples`
  - `## 4. Must Remember`
- Automatically writes each lecture directly to:
  `frontend/src/notes/{course}/week-{week}/lecture-{lec}.md`
- Supports **Google Gemini** (uses high-performance **`gemini-3.8-flash`** with auto-fallback to active account models), **Groq**, **OpenAI**, or **OpenRouter**.
- Includes automatic retry, rate-limiting, and resume mode (won't re-generate already completed notes).

### How to run:
```bash
# Using Gemini 3.8 Flash (recommended):
python scripts/generate_notes_ai.py --api-key YOUR_GEMINI_KEY

# Using specific Gemini model:
python scripts/generate_notes_ai.py --model gemini-3.8-flash --api-key YOUR_GEMINI_KEY

# For a single course:
python scripts/generate_notes_ai.py --course industrial-safety --api-key YOUR_GEMINI_KEY
python scripts/generate_notes_ai.py --course logistics --api-key YOUR_GEMINI_KEY

# Test on first 2 lectures only:
python scripts/generate_notes_ai.py --limit 2 --api-key YOUR_GEMINI_KEY

# For Logistics course:
python scripts/generate_notes_ai.py --input nptel_logistics_transcripts.json --course logistics --api-key YOUR_KEY
```

---

## 2. `nptel_transcript_harvester.js` (Browser DevTools)

### What it does:
- Opens the NPTEL course outline sidebar and expands all 12 weeks.
- Finds all 60 video lecture links (skipping quizzes, materials, and forms).
- Navigates through each lecture one-by-one.
- Safely triggers Radix UI dropdown menus using **`pointerdown` + `mousedown`** events to select **English**.
- Extracts the full lecture transcript (~30,000+ characters / ~5,500 words per lecture).
- Saves progress to browser `localStorage` after every lecture (crash-resilient).
- Automatically triggers download of `nptel_transcripts.json` when finished.

### How to run:
1. Open the course on NPTEL/Swayam in Google Chrome.
2. Press `F12` (or right-click → **Inspect**) and click the **Console** tab.
3. Copy the entire contents of [`nptel_transcript_harvester.js`](file:///d:/Nptel%20Notes/scripts/nptel_transcript_harvester.js), paste into the console, and press `Enter`.

---

## 3. `nptel_archive_transcript_fetcher.py` (Local Python Script)

### What it does:
- Solves the problem where an NPTEL course has **no transcripts tab on the website** and **YouTube video subtitles are unavailable / unlisted**.
- Connects directly to NPTEL's master digital archive (`http://www.digimat.in/nptel/courses/video/{COURSE_ID}/lec{index}.pdf`).
- Uses `pdfplumber` in memory to parse and extract the verbatim spoken words of the professor with timestamps.
- Generates the complete JSON transcript file (`nptel_industrial_safety_transcripts.json`) with all 60 lectures (1.5M+ characters / ~248,000 words).
- Zero bot blocks, zero CORS issues, completes in under 2 minutes.

### Requirements:
```bash
pip install pdfplumber
```

### How to run:
```bash
python scripts/nptel_archive_transcript_fetcher.py
```

---

## 4. `nptel_video_id_harvester.js` (Browser DevTools)

### What it does:
- Traverses all lectures in an NPTEL course sidebar.
- Inspects the embedded player iframe on each lecture to extract the official YouTube Video ID (`videoId`), direct YouTube link, and lecture title.
- Downloads `nptel_course_videos.json` containing the metadata mapping for all weeks and lectures.

---

## 📦 Harvested Datasets in Workspace Root

1. **[`nptel_industrial_safety_transcripts.json`](file:///d:/Nptel%20Notes/nptel_industrial_safety_transcripts.json)** (1.45 MB)
   - *Course:* Industrial Safety Engineering (`110105094`)
   - *Total Lectures:* 60 / 60
   - *Total Words:* ~248,000 words (1,488,126 characters)

2. **[`nptel_logistics_transcripts.json`](file:///d:/Nptel%20Notes/nptel_logistics_transcripts.json)** (~2.0 MB)
   - *Course:* Logistics & Supply Chain Management (`noc26_hs208`)
   - *Total Lectures:* 60 / 60
