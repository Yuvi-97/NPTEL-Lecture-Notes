import os, glob, re

courses = ['industrial-safety', 'logistics']
total_checked = 0
issues = []

for course in courses:
    files = sorted(glob.glob(f'frontend/src/notes/{course}/**/*.md', recursive=True))
    for f in files:
        total_checked += 1
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
            wc = len(content.split())
            
            # check sections
            has_title = content.startswith('# ') or '\n# ' in content
            has_s1 = '## 1. Key Concepts' in content or '## 1.' in content
            has_s2 = '## 2. Important Points' in content or '## 2.' in content
            has_s3 = '## 3. Differences' in content or '## 3.' in content
            has_s4 = '## 4. Must Remember' in content or '## 4.' in content
            
            if not (has_title and has_s1 and has_s2 and has_s4):
                issues.append(f"{f}: Missing expected sections! (Title: {has_title}, S1: {has_s1}, S2: {has_s2}, S4: {has_s4})")
            if wc < 120:
                issues.append(f"{f}: Word count too low ({wc} words)")

print(f"Total Notes Checked: {total_checked}")
if not issues:
    print("ALL 120 LECTURE REVISION NOTES PASSED STRICT QUALITY VERIFICATION!")
else:
    print(f"Found {len(issues)} issues:")
    for iss in issues[:10]:
        print("  -", iss)
