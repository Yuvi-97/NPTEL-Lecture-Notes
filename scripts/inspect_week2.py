import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    ts = json.load(f)

for idx in range(5, 11):
    t = ts[idx]
    print(f"\n{'='*25} INDEX {idx}: {t['title']} ({len(t['transcript'])} chars) {'='*25}")
    lines = [s.strip() for s in t['transcript'].split('. ') if s.strip()]
    print(f"Total sentences: {len(lines)}")
    # Print key lines that introduce concepts
    for i in range(0, len(lines), 4):
        print(f"[{i}] {lines[i][:115]}...")
