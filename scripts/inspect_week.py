import json, os, sys

def inspect_week(start_idx, end_idx):
    with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
        transcripts = json.load(f)
    with open('scripts/data/course_mappings.json', 'r', encoding='utf-8') as f:
        mappings = json.load(f)['logistics']
        
    for i in range(start_idx, end_idx):
        t = transcripts[i]
        m = mappings[i]
        note_path = os.path.join('frontend/src/notes', m['markdownPath'])
        print(f"[{i+1}/60] {m['markdownPath']} | Title: {t['title']} | Chars: {len(t['transcript'])}")

if __name__ == '__main__':
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 5
    inspect_week(start, end)
