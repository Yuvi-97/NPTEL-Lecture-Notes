import re, json

with open('frontend/src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

def get_course_lectures(cid):
    start = text.find(f"id: '{cid}'")
    next_start = text.find("id: '", start + 10)
    block = text[start:next_start] if next_start != -1 else text[start:]
    
    # find each week
    weeks = re.findall(r'\{\s*"weekNumber":\s*(\d+).*?"lectures":\s*(\[.*?\])\s*\}', block, re.DOTALL)
    all_lecs = []
    for wnum, lecs_str in weeks:
        lecs = re.findall(r'\{\s*"lectureNumber":\s*(\d+),\s*"title":\s*"(.*?)",\s*"markdownPath":\s*"(.*?)"\s*\}', lecs_str)
        for lnum, title, path in lecs:
            all_lecs.append({
                'weekNumber': int(wnum),
                'lectureNumber': int(lnum),
                'title': title,
                'markdownPath': path
            })
    return all_lecs

safety_lecs = get_course_lectures('industrial-safety')
logistics_lecs = get_course_lectures('logistics')

print(f"Safety parsed: {len(safety_lecs)}")
print(f"Logistics parsed: {len(logistics_lecs)}")

# Save these mappings to a json file for clean processing
with open('scripts/data/course_mappings.json', 'w', encoding='utf-8') as f:
    json.dump({
        'industrial-safety': safety_lecs,
        'logistics': logistics_lecs
    }, f, indent=2)
print("Saved scripts/data/course_mappings.json")
