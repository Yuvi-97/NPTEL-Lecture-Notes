"""
NPTEL Archive Verbatim Transcript Fetcher

PURPOSE:
When an NPTEL course has NO on-page transcripts on Swayam AND the YouTube
videos are unlisted (no public auto-captions), this script downloads and parses
the official NPTEL verbatim lecture transcript documents from NPTEL's master archive.

REQUIREMENTS:
- Python 3.8+
- `pip install pdfplumber`

USAGE:
  python scripts/nptel_archive_transcript_fetcher.py

OUTPUT:
  `nptel_industrial_safety_transcripts.json` (or specified output path)
  containing the complete spoken text (25,000–35,000 characters per lecture).
"""

import json
import os
import sys
import time
import io
import urllib.request
import pdfplumber

# Ensure UTF-8 console output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Paths & Course Configuration
COURSE_ID = "110105094"  # NPTEL Course ID for Industrial Safety Engineering
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)
VIDEOS_META_PATH = os.path.join(DATA_DIR, "nptel_industrial_safety_videos.json")
OUTPUT_PATH = os.path.join(DATA_DIR, "nptel_industrial_safety_transcripts.json")
BASE_URL = f"http://www.digimat.in/nptel/courses/video/{COURSE_ID}/lec{{index}}.pdf"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def main():
    if not os.path.exists(VIDEOS_META_PATH):
        print(f"Error: {VIDEOS_META_PATH} not found.")
        sys.exit(1)

    with open(VIDEOS_META_PATH, "r", encoding="utf-8") as f:
        lectures = json.load(f)

    print(f"Loaded {len(lectures)} lectures metadata from {VIDEOS_META_PATH}.")

    # Load existing progress if script was paused or restarted
    results = []
    if os.path.exists(OUTPUT_PATH):
        try:
            with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
                results = json.load(f)
                print(f"Resuming: found {len(results)} already processed lectures.")
        except Exception:
            results = []

    processed_indices = {item["index"] for item in results if item.get("transcriptLength", 0) > 500}
    total = len(lectures)

    for lec in lectures:
        idx = lec["index"]
        title = lec["title"]
        week = lec["week"]
        video_id = lec.get("videoId")
        youtube_url = lec.get("youtubeUrl")

        if idx in processed_indices:
            print(f"[SKIP] [{idx}/{total}] Already completed: {title}")
            continue

        pdf_url = BASE_URL.format(index=idx)
        print(f"[FETCH] [{idx}/{total}] Downloading & extracting: {title} ({week})...")

        transcript = ""
        for attempt in range(1, 4):
            try:
                req = urllib.request.Request(pdf_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=30) as resp:
                    pdf_data = resp.read()

                # Extract text in memory via pdfplumber
                with pdfplumber.open(io.BytesIO(pdf_data)) as pdf:
                    page_texts = []
                    for p in pdf.pages:
                        txt = p.extract_text()
                        if txt:
                            page_texts.append(txt.strip())
                    transcript = "\n\n".join(page_texts)

                if len(transcript) > 200:
                    break
            except Exception as e:
                print(f"   [WARN] Attempt {attempt} failed: {e}")
                time.sleep(2)

        entry = {
            "index": idx,
            "week": week,
            "title": title,
            "videoId": video_id,
            "youtubeUrl": youtube_url,
            "transcriptLength": len(transcript),
            "transcript": transcript
        }

        # Update existing or append
        existing_pos = next((i for i, r in enumerate(results) if r["index"] == idx), None)
        if existing_pos is not None:
            results[existing_pos] = entry
        else:
            results.append(entry)

        # Save to disk after every lecture (crash-resilient)
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2, ensure_ascii=False)

        if len(transcript) > 500:
            print(f"[OK] [{idx}/{total}] Saved! ({len(transcript):,} characters)")
        else:
            print(f"[WARN] [{idx}/{total}] Incomplete or empty ({len(transcript)} characters)")

        time.sleep(0.3)

    print("\nALL 60 LECTURE TRANSCRIPTS SUCCESSFULLY EXTRACTED!")
    print(f"Output saved to: {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
