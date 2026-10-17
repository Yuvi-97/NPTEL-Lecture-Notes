import re, json

with open('frontend/src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

paths_safety = re.findall(r'"markdownPath":\s*"(industrial-safety/[^"]+)"', text)
paths_logistics = re.findall(r'"markdownPath":\s*"(logistics/[^"]+)"', text)
print(f"Safety paths in courses.js: {len(paths_safety)}")
print(f"Logistics paths in courses.js: {len(paths_logistics)}")

with open('scripts/data/nptel_industrial_safety_transcripts.json', 'r', encoding='utf-8') as f:
    safety_transcripts = json.load(f)
print(f"Safety transcripts count: {len(safety_transcripts)}")

with open('scripts/data/nptel_logistics_transcripts.json', 'r', encoding='utf-8') as f:
    logistics_transcripts = json.load(f)
print(f"Logistics transcripts count: {len(logistics_transcripts)}")
