import json, sys, re

def inspect_transcript(idx):
    with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
        t = json.load(f)[idx]
    
    raw = t['transcript']
    print(f"=== TRANSCRIPT {idx+1}: {t['title']} ({len(raw)} chars) ===")
    
    # Split into rough paragraphs or 1500 char blocks
    step = 2500
    for i in range(0, len(raw), step):
        chunk = raw[i:i+step]
        print(f"\n--- [Offset {i} to {i+len(chunk)}] ---")
        print(chunk)

if __name__ == '__main__':
    idx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    inspect_transcript(idx)
