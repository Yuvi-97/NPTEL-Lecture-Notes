import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    ts = json.load(f)

for idx in [2, 3, 4]:
    t = ts[idx]
    print(f"\n{'='*20} LECTURE {idx+1}: {t['title']} ({len(t['transcript'])} chars) {'='*20}")
    lines = [s.strip() for s in t['transcript'].split('. ') if s.strip()]
    print(f"Total sentences: {len(lines)}")
    # Print key lines that introduce concepts
    for i, l in enumerate(lines):
        if any(w in l.lower() for w in ['concept', 'definition', 'classify', 'factor', 'national', 'international', 'warehouse', 'storage', '3pl', '4pl', 'provider', 'advantage', 'disadvantage', 'model', 'step']):
            print(f"[{i}] {l[:110]}...")
