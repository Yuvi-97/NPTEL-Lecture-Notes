import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    ts = json.load(f)

for idx in range(51, 60):
    t = ts[idx]
    print(f"\n{'='*25} INDEX {idx}: {t['title']} ({len(t['transcript'])} chars) {'='*25}")
    lines = [s.strip() for s in t['transcript'].split('. ') if s.strip()]
    print(f"Total sentences: {len(lines)}")
    for i in range(0, len(lines), max(1, len(lines)//10)):
        print(f"[{i}] {lines[i][:115]}...")
