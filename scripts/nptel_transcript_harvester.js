/**
 * NPTEL Course Transcript Harvester (Browser DevTools Script)
 * 
 * USAGE INSTRUCTIONS:
 * 1. Log in to Swayam / NPTEL and open your course page (e.g., https://onlinecourses.nptel.ac.in/e-learning/course/...)
 * 2. Open Developer Tools (F12 or right-click -> Inspect -> Console tab).
 * 3. Copy and paste the entire script below into the Console and press Enter.
 * 4. The script will:
 *    - Expand all 12 weeks in the course outline sidebar.
 *    - Discover all lecture videos (ignoring quizzes, materials, and forms).
 *    - Visit each lecture one by one.
 *    - Safely trigger the Radix UI language dropdown using pointerdown events to select "English".
 *    - Extract the full lecture transcript (30,000+ characters / ~5,500 words per lecture).
 *    - Automatically save each lecture to browser localStorage so progress is never lost if interrupted.
 *    - When all lectures are captured, automatically download `nptel_transcripts.json` to your computer.
 */

(async function runNptelHarvester() {
  // Course name or slug for downloaded file
  const courseSlug = "nptel_course";
  
  console.log("🚀 Starting NPTEL Automated Transcript Harvester...");

  // Helper sleep function
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Clean metadata and navigation headers from raw transcript text
  function cleanTranscript(raw) {
    if (!raw) return "";
    return raw
      .replace(/^Auto scroll\s*/i, "")
      .replace(/^Language for video transcript:\s*[^\n]*\s*/i, "")
      .replace(/^English\s*/i, "")
      .replace(/^Select your transcript language\.\s*/i, "")
      .trim();
  }

  // Trigger Radix UI Dropdown with pointerdown and select "English"
  async function selectEnglishIfPossible() {
    const panel = document.querySelector("#panel-transcript");
    const triggerBtn =
      panel?.querySelector('button[data-slot="dropdown-menu-trigger"]') ||
      panel?.querySelector('button[aria-haspopup="menu"]') ||
      Array.from(document.querySelectorAll("button")).find((b) =>
        (b.textContent || "").includes("Select language")
      );

    if (!triggerBtn) return false;

    // Radix UI dropdown triggers require pointerdown + mousedown events
    triggerBtn.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
    triggerBtn.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    triggerBtn.click();
    await sleep(600);

    // Locate the English option inside the Radix portal
    const allItems = Array.from(
      document.querySelectorAll(
        '[role="menuitem"], [role="option"], [data-radix-collection-item], [role="menu"] *'
      )
    ).filter((el) => el.children.length === 0 && (el.textContent || "").trim().length > 0);

    const englishItem = allItems.find((el) =>
      el.textContent.toLowerCase().includes("english")
    );

    if (englishItem) {
      englishItem.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
      englishItem.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
      englishItem.click();
      await sleep(1800); // Allow NPTEL time to stream and render the transcript text
      return true;
    }
    return false;
  }

  // 1. Expand all week accordions in the sidebar
  console.log("📂 Expanding all weeks in sidebar...");
  const weekButtons = Array.from(
    document.querySelectorAll('nav[aria-label="Course outline"] button')
  ).filter((b) => /Week\s*\d+/i.test(b.innerText) && b.getAttribute("aria-expanded") !== "true");

  for (const btn of weekButtons) {
    btn.click();
    await sleep(250);
  }
  await sleep(600);

  // 2. Discover all lecture elements (exclude quizzes, feedback, materials)
  const allElements = Array.from(document.querySelectorAll('nav[aria-label="Course outline"] *'));
  const rawLectureEls = allElements.filter((el) => {
    const text = (el.innerText || "").trim();
    return /^Lecture\s*[-:]*\s*\d+/i.test(text) && !/material/i.test(text) && el.children.length === 0;
  });

  const lectureItems = [];
  const seenTitles = new Set();

  for (const el of rawLectureEls) {
    const title = el.innerText.trim().replace(/\s+/g, " ");
    if (!seenTitles.has(title)) {
      seenTitles.add(title);
      const interactiveEl = el.closest('a, button, [role="button"]') || el;

      // Extract week title
      let weekName = "Week Unknown";
      let parent = el;
      while (parent && parent !== document.body) {
        const text = parent.innerText || "";
        const m = text.match(/Week\s*\d+\s*:/i);
        if (m) {
          weekName = m[0].trim();
          break;
        }
        parent = parent.parentElement;
      }

      lectureItems.push({
        title,
        week: weekName,
        el: interactiveEl,
      });
    }
  }

  console.log(`📋 Found ${lectureItems.length} lectures to harvest!`);
  if (lectureItems.length === 0) {
    console.error("❌ No lectures detected. Ensure the course outline sidebar is open.");
    return;
  }

  // Check existing progress in localStorage
  const storageKey = `nptel_harvested_${courseSlug}`;
  let results = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const capturedTitles = new Set(
    results.filter((r) => r.transcriptLength > 500).map((r) => r.title)
  );

  // 3. Loop through all lectures
  for (let i = 0; i < lectureItems.length; i++) {
    const item = lectureItems[i];
    const indexNum = i + 1;

    if (capturedTitles.has(item.title)) {
      console.log(`⏩ [${indexNum}/${lectureItems.length}] Already captured: ${item.title}`);
      continue;
    }

    console.log(`▶️ [${indexNum}/${lectureItems.length}] Navigating to: ${item.title} (${item.week})...`);

    // Scroll into view and click
    item.el.scrollIntoView({ behavior: "smooth", block: "center" });
    await sleep(200);
    item.el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
    item.el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    item.el.click();

    // Wait for lesson view to mount
    await sleep(2500);

    let panel = document.querySelector("#panel-transcript");
    let rawText = panel?.innerText || "";
    let transcript = cleanTranscript(rawText);

    // If transcript is not loaded yet, select English
    if (transcript.length < 500) {
      console.log(`   Selecting English language for Lecture ${indexNum}...`);
      await selectEnglishIfPossible();
      rawText = document.querySelector("#panel-transcript")?.innerText || "";
      transcript = cleanTranscript(rawText);
    }

    // Secondary fallback retry
    if (transcript.length < 500) {
      await sleep(1000);
      await selectEnglishIfPossible();
      rawText = document.querySelector("#panel-transcript")?.innerText || "";
      transcript = cleanTranscript(rawText);
    }

    // Save result entry
    const entry = {
      index: indexNum,
      week: item.week,
      title: item.title,
      transcriptLength: transcript.length,
      transcript: transcript,
    };

    // Replace if existing or add new
    const existingIndex = results.findIndex((r) => r.title === item.title);
    if (existingIndex >= 0) {
      results[existingIndex] = entry;
    } else {
      results.push(entry);
    }

    localStorage.setItem(storageKey, JSON.stringify(results));

    if (transcript.length > 500) {
      console.log(`✅ [${indexNum}/${lectureItems.length}] Captured! (${transcript.length.toLocaleString()} characters)`);
    } else {
      console.warn(`⚠️ [${indexNum}/${lectureItems.length}] Short transcript (${transcript.length} characters)`);
    }

    await sleep(800);
  }

  // 4. Download final JSON
  console.log("🎉 ALL LECTURES HARVESTED! Preparing download...");
  const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${courseSlug}_transcripts.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log(`📁 Downloaded '${courseSlug}_transcripts.json' successfully!`);
})();
