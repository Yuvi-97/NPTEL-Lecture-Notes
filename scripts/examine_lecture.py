import json
import sys

def view_lecture(index, start_char=0, length=4000):
    with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    item = data[index]
    title = item.get('title', '')
    text = item.get('transcript', '')
    print(f"LECTURE INDEX {index}: {title} (Total chars: {len(text)})")
    print(f"Viewing chars {start_char} to {start_char + length}:")
    print("-" * 50)
    print(text[start_char:start_char + length])
    print("-" * 50)

if __name__ == '__main__':
    idx = int(sys.argv[1]) if len(sys.argv) > 1 else 56
    start = int(sys.argv[2]) if len(sys.argv) > 2 else 0
    length = int(sys.argv[3]) if len(sys.argv) > 3 else 4000
    view_lecture(idx, start, length)
