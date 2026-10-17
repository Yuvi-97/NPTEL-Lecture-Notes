import json, os

with open('scripts/data/course_mappings.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)['logistics']

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    transcripts = json.load(f)

print(f"Total mappings in course_mappings: {len(mappings)}")
print(f"Total items in logistics transcripts: {len(transcripts)}")

for i in range(len(mappings)):
    m = mappings[i]
    t = transcripts[i]
    note_path = os.path.join('frontend/src/notes', m['markdownPath'])
    exists = os.path.exists(note_path)
    wc = 0
    if exists:
        with open(note_path, 'r', encoding='utf-8') as nf:
            wc = len(nf.read().split())
    print(f"[{i+1}/60] W{m['weekNumber']} L{m['lectureNumber']} | Note: {m['markdownPath']} (exists: {exists}, wc: {wc}) | TrTitle: {t['title']} ({len(t['transcript'])} chars)")
