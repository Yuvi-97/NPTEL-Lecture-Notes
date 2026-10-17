import json

with open('scripts/data/nptel_industrial_safety_transcripts.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

for idx in range(35, 40):
    lec = items[idx]
    title = lec['title']
    chars = len(lec['transcript'])
    print(f"=== Index {idx+1}: {title} ({chars} chars) ===")
    sample = lec['transcript'][:1200].replace('\n', ' ')
    print(sample)
    print("-" * 50)
