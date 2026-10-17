"""
AI Lecture Notes Generator for NPTEL Revision Courses
------------------------------------------------------
Converts harvested NPTEL lecture transcripts into concise, exam-focused Markdown
revision notes using an LLM API (Google Gemini, Groq, OpenAI, or OpenRouter).

USAGE:
  # Generate notes for Industrial Safety Engineering:
  python scripts/generate_notes_ai.py --course industrial-safety --api-key YOUR_KEY

  # Generate notes for Logistics & Supply Chain Management:
  python scripts/generate_notes_ai.py --course logistics --api-key YOUR_KEY

  # Generate notes for BOTH courses:
  python scripts/generate_notes_ai.py --course all --api-key YOUR_KEY

  # Test run on the first 2 lectures only:
  python scripts/generate_notes_ai.py --course industrial-safety --limit 2 --api-key YOUR_KEY

PROVIDERS SUPPORTED:
  --provider gemini     (Default, Google Gemini API, uses gemini-2.5-flash with 1,500 req/day free quota)
  --provider groq       (Groq API, uses llama-3.3-70b-versatile, 14,400 req/day free, ultra-fast)
  --provider openai     (OpenAI API, uses gpt-4o-mini)
  --provider openrouter (OpenRouter API)
"""

import os
import sys
import json
import time
import re
import argparse
import requests

# Base directories (dynamic and relative to this script's location)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
DATA_DIR = os.path.join(SCRIPT_DIR, "data")
COURSES_JS_PATH = os.path.join(REPO_ROOT, "frontend", "src", "data", "courses.js")
BASE_NOTES_DIR = os.path.join(REPO_ROOT, "frontend", "src", "notes")

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Master prompt template provided by the user
PROMPT_TEMPLATE = """You are an expert NPTEL exam revision-notes creator.

Convert the lecture transcript provided below into VERY CONCISE, EXAM-FOCUSED revision notes.

## Lecture Details
- Course: {course_name}
- Week: {week_str}
- Lecture: {lec_num}
- Topic: {topic}

## Main Objective
Create short notes that help a student revise the lecture quickly before an NPTEL exam. Include only the most important information that is useful for understanding and recalling the concepts.

## Strict Rules
1. Use ONLY information supported by the provided transcript. Do not add outside knowledge or invent facts.
2. Prioritize important definitions, core concepts, classifications, components, steps, differences, formulas, numerical facts, and lists explicitly discussed in the lecture.
3. Be selective. Do not include every minor detail or example.
4. Explain each concept in simple, clear English, preferably in one or two lines.
5. Use concise bullet points instead of long paragraphs.
6. Preserve important technical terms and exact meanings.
7. Include examples only when they clarify an important concept or distinction.
8. Include numbers, percentages, names, and classifications when they are important and explicitly mentioned in the transcript.
9. Remove greetings, lecturer introductions, repeated explanations, filler words, unnecessary background, and lengthy conclusions.
10. Do not repeat the same information in multiple sections.
11. Do not invent likely exam questions, unsupported exam predictions, or information absent from the transcript.
12. If a detail is unclear in the transcript, do not guess.
13. Aim for 150–300 words per lecture. Use fewer words when possible. Exceed this range only when necessary to preserve important exam-relevant information.
14. Prefer information density over completeness: every bullet should help with exam revision.

## Required Markdown Format

# Week {week_num} – Lecture {lec_num}: {topic}

## 1. Key Concepts
- The most important concepts and definitions.

## 2. Important Points
- Essential classifications, components, steps, facts, and relationships.

## 3. Differences / Examples
- Include only when the lecture contains important comparisons or examples.
- Use a small Markdown table for comparisons when useful.
- Omit this section if unnecessary.

## 4. Must Remember
- A short list of critical facts, terms, numbers, or distinctions to memorize.
- Avoid repeating earlier bullets.

## Final Quality Check
Before responding, verify that:
- The notes are concise and quick to revise.
- Every included fact is supported by the transcript.
- Important concepts have not been omitted merely to meet the word limit.
- No unnecessary explanations or repetitive points remain.
- All headings use the specified format.

Return ONLY the finished Markdown notes, ready to save as a .md file. Do not include a preface or wrap the notes in a code fence.

## Lecture Transcript
{transcript}
"""


def load_env_file(path):
    """Loads KEY=VAL pairs from a file into os.environ if not already set."""
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    k = k.strip()
                    v = v.strip().strip("'\"")
                    if k not in os.environ:
                        os.environ[k] = v


_DETECTED_GEMINI_MODEL = None


def get_best_gemini_model(api_key, requested_model=None, force_discover=False):
    """
    Returns the requested model or discovers the best available active Gemini model
    via the Gemini API ModelService.ListModels endpoint.
    """
    global _DETECTED_GEMINI_MODEL
    if requested_model and not force_discover:
        return requested_model
    if _DETECTED_GEMINI_MODEL and not force_discover:
        return _DETECTED_GEMINI_MODEL

    priority_candidates = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-3.8-flash",
        "gemini-2.5-flash-lite",
        "gemini-1.5-flash-latest",
        "gemini-2.5-pro",
        "gemini-3.8-pro",
        "gemini-1.5-pro-latest",
    ]

    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"
        res = requests.get(url, timeout=12)
        if res.status_code == 200:
            data = res.json()
            available = [
                m["name"].replace("models/", "")
                for m in data.get("models", [])
                if "generateContent" in m.get("supportedGenerationMethods", [])
            ]
            for cand in priority_candidates:
                if cand in available:
                    _DETECTED_GEMINI_MODEL = cand
                    print(f"🤖 Connected to Gemini API. Active model: {_DETECTED_GEMINI_MODEL} (1,500 req/day limit)")
                    return cand

            # If none of the priority list match exactly, pick first model with 'flash'
            flash_models = [m for m in available if "flash" in m.lower()]
            if flash_models:
                _DETECTED_GEMINI_MODEL = flash_models[0]
                print(f"🤖 Connected to Gemini API. Active model: {_DETECTED_GEMINI_MODEL}")
                return flash_models[0]

            if available:
                _DETECTED_GEMINI_MODEL = available[0]
                print(f"🤖 Connected to Gemini API. Active model: {_DETECTED_GEMINI_MODEL}")
                return available[0]
    except Exception as e:
        pass

    _DETECTED_GEMINI_MODEL = requested_model or "gemini-2.5-flash"
    return _DETECTED_GEMINI_MODEL


def make_gemini_payload(prompt, model_name):
    """Constructs the JSON request payload tailored to model capabilities."""
    config = {
        "temperature": 0.2,
        "maxOutputTokens": 8192,
    }
    # Only Gemini 3 models support thinkingLevel
    if "3" in model_name:
        config["thinkingConfig"] = {"thinkingLevel": "low"}
    return {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": config
    }


def call_llm(prompt, provider, api_key, model=None):
    """Calls the specified LLM API provider and returns text response."""
    global _DETECTED_GEMINI_MODEL
    
    # 1. Google Gemini (REST API)
    if provider == "gemini":
        model_name = get_best_gemini_model(api_key, model)
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
        payload = make_gemini_payload(prompt, model_name)
        res = requests.post(url, json=payload, timeout=90)

        # If model doesn't support thinkingConfig (400), retry with standard generationConfig
        if res.status_code == 400 and "thinking" in res.text.lower():
            payload["generationConfig"] = {
                "temperature": 0.2,
                "maxOutputTokens": 8192
            }
            res = requests.post(url, json=payload, timeout=90)

        # If 404, the requested model name was not found; auto-discover active models and retry
        if res.status_code == 404:
            fallback_model = get_best_gemini_model(api_key, force_discover=True)
            if fallback_model and fallback_model != model_name:
                print(f"   [INFO] Model '{model_name}' returned 404. Auto-switching to '{fallback_model}'...")
                model_name = fallback_model
                _DETECTED_GEMINI_MODEL = fallback_model
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                payload = make_gemini_payload(prompt, model_name)
                res = requests.post(url, json=payload, timeout=90)

        # If 503 (high demand) or 429 (quota cap on this model, e.g. 20 RPD on 3.8-flash)
        if res.status_code in (503, 429):
            is_quota_failure = "quota" in res.text.lower() or res.status_code == 429
            if is_quota_failure:
                print(f"   ⚠️ Model '{model_name}' hit daily limit (20 req/day). Auto-switching to high-quota model...")
            
            alt_candidates = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.5-flash-lite"]
            for alt in alt_candidates:
                if alt != model_name:
                    print(f"   🔄 Trying alternative model '{alt}' (1,500 req/day quota)...")
                    alt_url = f"https://generativelanguage.googleapis.com/v1beta/models/{alt}:generateContent?key={api_key}"
                    alt_payload = make_gemini_payload(prompt, alt)
                    alt_res = requests.post(alt_url, json=alt_payload, timeout=90)
                    if alt_res.status_code == 400 and "thinking" in alt_res.text.lower():
                        alt_payload["generationConfig"] = {"temperature": 0.2, "maxOutputTokens": 8192}
                        alt_res = requests.post(alt_url, json=alt_payload, timeout=90)
                    if alt_res.status_code == 200:
                        res = alt_res
                        model_name = alt
                        _DETECTED_GEMINI_MODEL = alt  # Permanently switch so all future lectures use this model!
                        print(f"   ✅ Permanently switched to '{alt}' for remaining lectures.")
                        break

        if res.status_code != 200:
            raise RuntimeError(f"Gemini API Error [{res.status_code}]: {res.text}")
        data = res.json()
        try:
            cand = data["candidates"][0]
            finish_reason = cand.get("finishReason", "")
            if finish_reason == "MAX_TOKENS":
                raise RuntimeError("Response was truncated by MAX_TOKENS limit. Retrying with higher headroom...")
            
            parts = cand.get("content", {}).get("parts", [])
            # In models with internal thinking, extract the candidate response part (not the thought part)
            text_parts = [p.get("text", "") for p in parts if "text" in p and not p.get("thought", False)]
            if not text_parts and parts:
                text_parts = [parts[-1].get("text", "")]
            response_text = "".join(text_parts).strip()
            if not response_text:
                raise RuntimeError("Empty response received from Gemini.")
            return response_text
        except (KeyError, IndexError) as err:
            raise RuntimeError(f"Gemini API unexpected format: {data}") from err

    # 2. OpenAI / Groq / OpenRouter (OpenAI-compatible chat completion)
    if provider in ("openai", "groq", "openrouter"):
        if provider == "openai":
            base_url = "https://api.openai.com/v1/chat/completions"
            model_name = model or "gpt-4o-mini"
        elif provider == "groq":
            base_url = "https://api.groq.com/openai/v1/chat/completions"
            model_name = model or "llama-3.3-70b-versatile"
        elif provider == "openrouter":
            base_url = "https://openrouter.ai/api/v1/chat/completions"
            model_name = model or "google/gemini-2.0-flash-001"

        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": model_name,
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.2,
            "max_tokens": 4096,
        }
        res = requests.post(base_url, headers=headers, json=payload, timeout=90)
        if res.status_code != 200:
            raise RuntimeError(f"{provider.upper()} API Error [{res.status_code}]: {res.text}")
        data = res.json()
        return data["choices"][0]["message"]["content"]

    raise ValueError(f"Unsupported provider: {provider}")


def clean_markdown_response(text):
    """Strips outer code fences if the model wrapped the response in ```markdown."""
    text = text.strip()
    if text.startswith("```markdown"):
        text = text[len("```markdown"):].strip()
    elif text.startswith("```"):
        text = text[3:].strip()
    if text.endswith("```"):
        text = text[:-3].strip()
    return text


def validate_notes_markdown(text):
    """
    Validates that the generated notes are complete, well-formed,
    and adhere to the 4-section exam format without abrupt truncation.
    """
    if not text or len(text.strip()) < 300:
        return False, "Text is too short (< 300 characters)"
    
    words = len(text.split())
    if words < 100:
        return False, f"Word count too low ({words} words, minimum 100 expected)"

    # Check for core sections (case-insensitive)
    has_key = bool(re.search(r"(#+\s*1\.\s*Key\s*Concepts|Key\s*Concepts)", text, re.I))
    has_imp = bool(re.search(r"(#+\s*2\.\s*Important\s*Points|Important\s*Points)", text, re.I))
    has_rem = bool(re.search(r"(#+\s*4\.\s*Must\s*Remember|Must\s*Remember)", text, re.I))

    if not has_key:
        return False, "Missing Section 1 (Key Concepts)"
    if not has_imp:
        return False, "Missing Section 2 (Important Points)"
    if not has_rem:
        return False, "Missing Section 4 (Must Remember)"

    # Check for abrupt truncation at the end
    lines = [l.strip() for l in text.strip().splitlines() if l.strip()]
    if not lines:
        return False, "Empty content"
    last_line = lines[-1]

    # If last line looks like an unfinished bullet item e.g. "* **Acc" or ends with dangling conjunction
    if re.search(r"^(\*|-|\d+\.)\s+\*\*[A-Za-z0-9\s]{1,10}$", last_line):
        return False, f"Abruptly cut off line at end: '{last_line}'"
    if re.search(r"\b(due|and|the|or|to|of|in|with|that|which|is|are|as|for)\s*$", last_line, re.I):
        return False, f"Dangling sentence end: '{last_line}'"

    return True, "Valid"


def is_valid_complete_note(text):
    """Checks if an existing markdown file is complete and not a placeholder or truncated file."""
    if not text or "TODO: Replace this placeholder" in text:
        return False
    valid, _ = validate_notes_markdown(text)
    return valid


def resolve_transcript_path(course_type):
    """Finds the transcript JSON file for a course in scripts/data, workspace root, or cwd."""
    search_dirs = [DATA_DIR, SCRIPT_DIR, REPO_ROOT, os.getcwd()]
    for d in search_dirs:
        if not os.path.exists(d):
            continue
        try:
            for fname in os.listdir(d):
                fname_lower = fname.lower()
                if fname_lower.endswith(".json") and "transcript" in fname_lower:
                    if course_type == "safety" and ("safety" in fname_lower or "industrial" in fname_lower):
                        return os.path.join(d, fname)
                    elif course_type == "logistics" and ("logistic" in fname_lower or "scm" in fname_lower):
                        return os.path.join(d, fname)
        except Exception:
            pass
    if course_type == "safety":
        return os.path.join(DATA_DIR, "nptel_industrial_safety_transcripts.json")
    return os.path.join(DATA_DIR, "nptel_logistics_transcripts.json")


def sync_frontend_courses_js(logistics_lectures=None, safety_lectures=None):
    """Syncs real lecture titles and counts into frontend/src/data/courses.js"""
    if not os.path.exists(COURSES_JS_PATH):
        return

    def build_weeks_obj(lectures, course_slug, default_title):
        week_dict = {}
        for lec in lectures:
            w_match = re.search(r"(\d+)", lec.get("week", "1"))
            w_num = int(w_match.group(1)) if w_match else 1
            if w_num not in week_dict:
                week_dict[w_num] = []
            week_dict[w_num].append(lec)

        weeks_list = []
        for w_num in range(1, 13):
            w_pad = f"{w_num:02d}"
            lecs = week_dict.get(w_num, [])
            lec_entries = []
            for l_idx, l in enumerate(lecs, start=1):
                l_pad = f"{l_idx:02d}"
                clean_t = l["title"].replace("'", "\\'").strip()
                lec_entries.append({
                    "lectureNumber": l_idx,
                    "title": clean_t,
                    "markdownPath": f"{course_slug}/week-{w_pad}/lecture-{l_pad}.md"
                })

            weeks_list.append({
                "weekNumber": w_num,
                "title": f"Week {w_num}",
                "description": f"Revision notes for Week {w_num} lecture concepts.",
                "lectures": lec_entries
            })
        return weeks_list

    # Load from scripts/data if not provided
    if logistics_lectures is None:
        p = resolve_transcript_path("logistics")
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as f:
                logistics_lectures = json.load(f)

    if safety_lectures is None:
        p = resolve_transcript_path("safety")
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as f:
                safety_lectures = json.load(f)

    logistics_weeks = build_weeks_obj(logistics_lectures, "logistics", "Logistics & Supply Chain Management") if logistics_lectures else None
    safety_weeks = build_weeks_obj(safety_lectures, "industrial-safety", "Industrial Safety Engineering") if safety_lectures else None

    # Format into JS
    js_content = f"""/**
 * Centralized data source for NPTEL revision courses.
 * Auto-generated from official NPTEL harvested course transcripts.
 */

export const COURSES = [
  {{
    id: 'logistics',
    slug: 'logistics',
    code: 'Course 01',
    title: 'Logistics & Supply Chain Management',
    description: 'Explore logistics fundamentals, supply chain concepts, stakeholders, and related topics.',
    weeks: '12 Weeks',
    weeksCount: 12,
    iconType: 'truck',
    badge: 'Supply Chain & Operations',
    weekList: {json.dumps(logistics_weeks, indent=4) if logistics_weeks else "[]"},
  }},
  {{
    id: 'industrial-safety',
    slug: 'industrial-safety',
    code: 'Course 02',
    title: 'Industrial Safety Engineering',
    description: 'Review industrial safety concepts, workplace hazards, prevention, and safety practices.',
    weeks: '12 Weeks',
    weeksCount: 12,
    iconType: 'shield',
    badge: 'Safety & Compliance',
    weekList: {json.dumps(safety_weeks, indent=4) if safety_weeks else "[]"},
  }},
];

export function getCourseBySlug(slug) {{
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return COURSES.find(
    (c) => c.slug === normalized || c.id === normalized || (c.id === 'logistics' && normalized.includes('logistics')) || (c.id === 'industrial-safety' && normalized.includes('safety'))
  ) || null;
}}

export function getWeekData(courseSlug, weekNumber) {{
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;
  const wNum = parseInt(weekNumber, 10);
  const week = course.weekList.find((w) => w.weekNumber === wNum);
  if (!week) return null;
  return {{ course, week }};
}}

export function getLectureData(courseSlug, weekNumber, lectureNumber) {{
  const weekData = getWeekData(courseSlug, weekNumber);
  if (!weekData) return null;
  const lNum = parseInt(lectureNumber, 10);
  const lecture = weekData.week.lectures.find((l) => l.lectureNumber === lNum);
  if (!lecture) return null;
  return {{ course: weekData.course, week: weekData.week, lecture }};
}}

export function getAllLecturesForCourse(courseSlug) {{
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];
  const list = [];
  course.weekList.forEach((week) => {{
    week.lectures.forEach((lec) => {{
      list.push({{
        courseSlug: course.slug,
        courseTitle: course.title,
        weekNumber: week.weekNumber,
        weekTitle: week.title,
        lectureNumber: lec.lectureNumber,
        title: lec.title,
        markdownPath: lec.markdownPath,
      }});
    }});
  }});
  return list;
}}

export function getAdjacentLectures(courseSlug, weekNumber, lectureNumber) {{
  const allLectures = getAllLecturesForCourse(courseSlug);
  const wNum = parseInt(weekNumber, 10);
  const lNum = parseInt(lectureNumber, 10);
  const currentIndex = allLectures.findIndex(
    (item) => item.weekNumber === wNum && item.lectureNumber === lNum
  );
  if (currentIndex === -1) return {{ prevLecture: null, nextLecture: null }};
  const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
  const nextLecture = currentIndex < allLectures.length - 1 ? allLectures[currentIndex + 1] : null;
  return {{ prevLecture, nextLecture }};
}}
"""
    with open(COURSES_JS_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)
    print("✅ Synced real lecture counts & titles into frontend/src/data/courses.js!")


def process_course(course_slug, input_path, api_key, provider, model=None, limit=None, force=False, delay=None):
    """Processes all lectures for a specific course and generates Markdown notes."""
    course_name = (
        "Industrial Safety Engineering"
        if course_slug == "industrial-safety"
        else "Logistics & Supply Chain Management"
    )

    with open(input_path, "r", encoding="utf-8") as f:
        lectures = json.load(f)

    base_notes_dir = os.path.join(BASE_NOTES_DIR, course_slug)
    os.makedirs(base_notes_dir, exist_ok=True)

    week_lecture_counter = {}
    to_process = lectures[:limit] if limit else lectures
    total = len(to_process)

    print(f"\n{'='*70}")
    print(f"📚 Course: {course_name} (Slug: {course_slug})")
    print(f"📄 Source: {input_path} ({len(lectures)} total lectures)")
    print(f"📁 Destination: {base_notes_dir}")
    print(f"{'='*70}")

    # Delay between requests to stay comfortably within free tier limits (Gemini: 15 req/min -> 7s default)
    delay_sec = delay if delay is not None else (7.0 if provider == "gemini" else 1.5)
    print(f"⏱️ Request delay: {delay_sec}s between lectures")

    for i, lec in enumerate(to_process):
        idx = lec["index"]
        title = lec["title"]
        transcript = lec.get("transcript", "").strip()
        week_str = lec.get("week", "Week 1")

        # Parse week number
        w_match = re.search(r"(\d+)", week_str)
        week_num = int(w_match.group(1)) if w_match else 1
        week_pad = f"{week_num:02d}"

        # Relative lecture number within this week
        week_lecture_counter[week_num] = week_lecture_counter.get(week_num, 0) + 1
        rel_lec_num = week_lecture_counter[week_num]
        rel_lec_pad = f"{rel_lec_num:02d}"

        topic_clean = re.sub(r"^(Lecture|Lec)\s*[-:]*\s*\d+\s*[-:]*\s*", "", title, flags=re.I).strip()

        week_dir = os.path.join(base_notes_dir, f"week-{week_pad}")
        os.makedirs(week_dir, exist_ok=True)
        target_md_path = os.path.join(week_dir, f"lecture-{rel_lec_pad}.md")

        # Check if already generated and verified complete
        if not force and os.path.exists(target_md_path):
            with open(target_md_path, "r", encoding="utf-8") as check_f:
                existing_content = check_f.read()
            if is_valid_complete_note(existing_content):
                words = len(existing_content.split())
                print(f"⏩ [{i+1}/{total}] Already generated (Verified, {words} words): Week {week_num} Lec {rel_lec_num} ({topic_clean})")
                continue
            elif "TODO: Replace this placeholder" not in existing_content:
                print(f"🔄 [{i+1}/{total}] Incomplete note detected. Re-generating: Week {week_num} Lec {rel_lec_num} ({topic_clean})...")

        if not transcript or len(transcript) < 200:
            print(f"⚠️ [{i+1}/{total}] Skipping (Empty transcript): {title}")
            continue

        print(f"▶️ [{i+1}/{total}] Generating: Week {week_num} Lec {rel_lec_num} ({topic_clean})...")

        prompt = PROMPT_TEMPLATE.format(
            course_name=course_name,
            week_str=f"Week {week_num}",
            week_num=week_num,
            lec_num=rel_lec_num,
            topic=topic_clean,
            transcript=transcript,
        )

        md_content = None
        max_attempts = 5
        backoff_delays = [6, 12, 20, 30, 45]

        for attempt in range(1, max_attempts + 1):
            try:
                raw_response = call_llm(prompt, provider, api_key, model=model)
                cleaned = clean_markdown_response(raw_response)
                valid, reason = validate_notes_markdown(cleaned)
                if not valid:
                    raise RuntimeError(f"Generated note failed completeness check: {reason}")
                md_content = cleaned
                break
            except Exception as e:
                sleep_sec = backoff_delays[min(attempt - 1, len(backoff_delays) - 1)]
                print(f"   [WARN] Attempt {attempt}/{max_attempts} failed: {e}")
                if attempt < max_attempts:
                    print(f"   ⏳ Cooling down for {sleep_sec}s before retry...")
                    time.sleep(sleep_sec)

        if not md_content:
            print(f"❌ [{i+1}/{total}] Failed: {title}")
            continue

        with open(target_md_path, "w", encoding="utf-8") as out_f:
            out_f.write(md_content)

        words = len(md_content.split())
        print(f"✅ [{i+1}/{total}] Saved (Verified Complete): week-{week_pad}/lecture-{rel_lec_pad}.md ({words} words)")

        time.sleep(delay_sec)


def main():
    parser = argparse.ArgumentParser(description="Generate NPTEL Exam Revision Notes via LLM")
    parser.add_argument("--course", default="all", help="Course: 'industrial-safety', 'logistics', or 'all'")
    parser.add_argument("--input", default=None, help="Explicit path to transcripts JSON file")
    parser.add_argument("--api-key", default=None, help="API key for LLM provider")
    parser.add_argument("--provider", default=None, help="Provider: 'gemini', 'openai', 'groq', 'openrouter'")
    parser.add_argument("--model", default=None, help="Model name override")
    parser.add_argument("--limit", type=int, default=None, help="Limit number of lectures to process")
    parser.add_argument("--delay", type=float, default=None, help="Delay in seconds between lecture requests (default: 5.0s for Gemini)")
    parser.add_argument("--force", action="store_true", help="Overwrite existing notes")
    parser.add_argument("--no-sync", action="store_true", help="Skip updating courses.js")
    args = parser.parse_args()

    load_env_file(".env")
    load_env_file(r"backend\.env")

    api_key = args.api_key
    provider = args.provider

    if not api_key:
        if os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY"):
            api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
            provider = provider or "gemini"
        elif os.environ.get("GROQ_API_KEY"):
            api_key = os.environ.get("GROQ_API_KEY")
            provider = provider or "groq"
        elif os.environ.get("OPENAI_API_KEY"):
            api_key = os.environ.get("OPENAI_API_KEY")
            provider = provider or "openai"
        elif os.environ.get("OPENROUTER_API_KEY"):
            api_key = os.environ.get("OPENROUTER_API_KEY")
            provider = provider or "openrouter"

    if not api_key:
        print("\n❌ Error: No API key found!")
        print("Please provide your API key:")
        print("  python scripts/generate_notes_ai.py --api-key YOUR_KEY")
        print("  Or set GEMINI_API_KEY=YOUR_KEY\n")
        sys.exit(1)

    provider = provider or "gemini"
    print(f"🚀 AI Provider: {provider.upper()}")

    # Sync courses.js with official lecture titles and counts
    if not args.no_sync:
        sync_frontend_courses_js()

    # Resolve transcript paths (checks scripts/data, workspace root, etc.)
    safety_json = resolve_transcript_path("safety")
    logistics_json = resolve_transcript_path("logistics")

    target_course = args.course.lower().strip()

    if args.input:
        slug = "industrial-safety" if "safety" in args.input.lower() else "logistics"
        process_course(slug, args.input, api_key, provider, model=args.model, limit=args.limit, force=args.force, delay=args.delay)
    elif target_course in ("industrial-safety", "safety"):
        process_course("industrial-safety", safety_json, api_key, provider, model=args.model, limit=args.limit, force=args.force, delay=args.delay)
    elif target_course in ("logistics", "scm"):
        process_course("logistics", logistics_json, api_key, provider, model=args.model, limit=args.limit, force=args.force, delay=args.delay)
    elif target_course == "all":
        if os.path.exists(safety_json):
            process_course("industrial-safety", safety_json, api_key, provider, model=args.model, limit=args.limit, force=args.force, delay=args.delay)
        if os.path.exists(logistics_json):
            process_course("logistics", logistics_json, api_key, provider, model=args.model, limit=args.limit, force=args.force, delay=args.delay)
    else:
        print(f"❌ Unknown course option: {args.course}. Use 'industrial-safety', 'logistics', or 'all'.")

    print("\n🎉 Done! All requested lecture notes have been processed.")


if __name__ == "__main__":
    main()
