import json, os, sys

def audit_detail(idx):
    with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
        t = json.load(f)[idx]
    with open('scripts/data/course_mappings.json', 'r', encoding='utf-8') as f:
        m = json.load(f)['logistics'][idx]
        
    note_path = os.path.join('frontend/src/notes', m['markdownPath'])
    print(f"=== LECTURE {idx+1}: {t['title']} ===")
    print(f"File: {note_path}")
    print(f"Transcript length: {len(t['transcript'])} chars")
    
    if os.path.exists(note_path):
        with open(note_path, 'r', encoding='utf-8') as nf:
            content = nf.read()
        print(f"Current note word count: {len(content.split())} words")
        print("\n--- CURRENT NOTE CONTENT ---")
        print(content)
    else:
        print("Note file does not exist!")

if __name__ == '__main__':
    idx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    audit_detail(idx)
