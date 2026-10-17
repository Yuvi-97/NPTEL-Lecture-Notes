import json

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for idx in [56, 57, 58, 59]:
    item = data[idx]
    title = item.get('title', '')
    text = item.get('transcript', '')
    print(f"==================================================")
    print(f"INDEX {idx}: {title}")
    print(f"Total Characters: {len(text)}, Lines: {len(text.splitlines())}")
    print(f"==================================================")
