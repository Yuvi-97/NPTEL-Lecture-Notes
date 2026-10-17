import json

with open('scripts/data/nptel_industrial_safety_transcripts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for idx in range(11, 16):
    t = data[idx]['transcript']
    print(f"==================================================")
    print(f"INDEX {idx}: {data[idx]['title']}")
    print(f"Total Chars: {len(t):,}")
    print(f"==================================================")
    for chunk_start in range(0, len(t), 7000):
        print(f"--- Chunk {chunk_start} to {chunk_start+7000} ---")
        print(t[chunk_start:chunk_start+1500])
        print("...\n")
