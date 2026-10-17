import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    ts = json.load(f)

for idx in [14, 15, 16]:
    print(f"\n{'='*20} INDEX {idx}: {ts[idx]['title']} ({len(ts[idx]['transcript'])} chars) {'='*20}")
    lines = [s.strip() for s in ts[idx]['transcript'].split('. ') if s.strip()]
    print(f"Total sentences: {len(lines)}")
    for i, l in enumerate(lines):
        if any(w in l.lower() for w in ['muda', 'muri', 'mura', 'waste', 'timwood', 'value stream', 'vsm', 'kaizen', 'kanban', 'heijunka', 'jidoka', 'andon', 'poka yoke', 'tps', 'six sigma', 'dmaic']):
            print(f"[{i}] {l[:110]}...")
