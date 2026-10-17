import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    ts = json.load(f)

for idx in [5, 6, 7]:
    t = ts[idx]
    print(f"\n{'='*20} INDEX {idx}: {t['title']} ({len(t['transcript'])} chars) {'='*20}")
    lines = [s.strip() for s in t['transcript'].split('. ') if s.strip()]
    print(f"Total sentences: {len(lines)}")
    for i in range(0, len(lines), 5):
        print(f"[{i}] {lines[i][:110]}...")
