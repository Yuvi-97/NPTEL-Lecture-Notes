import glob
import json
import os

notes = sorted(glob.glob('frontend/src/notes/industrial-safety/**/*.md', recursive=True))
with open('scripts/data/nptel_industrial_safety_transcripts.json', 'r', encoding='utf-8') as f:
    transcripts = json.load(f)

print(f"Total Notes: {len(notes)}, Total Transcripts: {len(transcripts)}")

for i in range(len(notes)):
    n = notes[i]
    t = transcripts[i]
    with open(n, 'r', encoding='utf-8') as f:
        first_line = f.readline().strip()
    title = t.get('title', '')
    chars = len(t.get('transcript', ''))
    print(f"[{i:02d}] Note: {n}")
    print(f"     H1: {first_line}")
    print(f"     Transcript: {title} ({chars:,} chars)")
