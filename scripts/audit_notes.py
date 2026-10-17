import json, os

with open('scripts/data/course_mappings.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

for cid in ['industrial-safety', 'logistics']:
    total = len(mappings[cid])
    done = 0
    pending = []
    for item in mappings[cid]:
        path = os.path.join('frontend/src/notes', item['markdownPath'].replace(f"{cid}/", ""))
        full_path = os.path.join('frontend/src/notes', item['markdownPath'])
        # check both full_path and path
        check_path = full_path if os.path.exists(full_path) else path
        if os.path.exists(check_path):
            with open(check_path, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                wc = len(content.split())
                if wc >= 100 and "Replace With Actual Title" not in content and "placeholder" not in content.lower():
                    done += 1
                else:
                    pending.append((item['weekNumber'], item['lectureNumber'], item['title'], item['markdownPath'], wc))
        else:
            pending.append((item['weekNumber'], item['lectureNumber'], item['title'], item['markdownPath'], 0))
    print(f"Course: {cid} | Total: {total} | Completed: {done} | Pending: {len(pending)}")
    if pending:
        print(f"  First 5 pending for {cid}:")
        for p in pending[:5]:
            print(f"    W{p[0]} L{p[1]}: {p[2]} ({p[3]}) [wc: {p[4]}]")
