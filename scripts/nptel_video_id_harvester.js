/**
 * NPTEL Video ID & Metadata Harvester
 * Course: Industrial Safety Engineering
 * 
 * Instructions:
 * 1. Open the "Industrial Safety Engineering" course on NPTEL/Swayam in Chrome.
 * 2. Press F12 to open Console.
 * 3. Paste this script and press Enter.
 * 4. It will navigate through all lectures, extract the YouTube Video IDs,
 *    and download `nptel_industrial_safety_videos.json`.
 */

(async function harvestIndustrialSafetyVideos() {
  const courseSlug = "nptel_industrial_safety";
  console.log("🚀 Starting Harvester for Industrial Safety Engineering...");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 1. Expand all weeks / modules in the sidebar
  console.log("📂 Expanding sidebar weeks...");
  const weekButtons = Array.from(
    document.querySelectorAll('nav[aria-label="Course outline"] button, button[aria-expanded]')
  ).filter((b) => /(Week|Module)\s*\d+/i.test(b.innerText) && b.getAttribute("aria-expanded") !== "true");

  for (const btn of weekButtons) {
    btn.click();
    await sleep(250);
  }
  await sleep(600);

  // 2. Discover all lecture links / items
  const allElements = Array.from(document.querySelectorAll('nav[aria-label="Course outline"] *, aside *'));
  const rawLectureEls = allElements.filter((el) => {
    const text = (el.innerText || "").trim();
    const isLecture = /^(Lecture|Lec)\s*[-:]*\s*\d+/i.test(text);
    const isExcluded = /material|quiz|assignment|feedback|solution|announcement/i.test(text);
    return isLecture && !isExcluded && el.children.length === 0;
  });

  const lectureItems = [];
  const seenTitles = new Set();

  for (const el of rawLectureEls) {
    const title = el.innerText.trim().replace(/\s+/g, " ");
    if (!seenTitles.has(title)) {
      seenTitles.add(title);
      const interactiveEl = el.closest('a, button, [role="button"]') || el;

      // Detect week
      let weekName = "Week Unknown";
      let parent = el;
      while (parent && parent !== document.body) {
        const text = parent.innerText || "";
        const m = text.match(/(Week\s*\d+|Module\s*\d+)/i);
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

  console.log(`📋 Found ${lectureItems.length} lectures to process!`);
  if (lectureItems.length === 0) {
    console.error("❌ No lectures detected. Ensure the course sidebar is visible.");
    return;
  }

  // Helper to extract YouTube Video ID from iframe or page
  async function waitForYouTubeVideo(maxWaitMs = 3000) {
    const startTime = Date.now();
    while (Date.now() - startTime < maxWaitMs) {
      const iframes = Array.from(document.querySelectorAll("iframe"));
      for (const iframe of iframes) {
        const src = iframe.src || iframe.getAttribute("src") || "";
        const match = src.match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
        if (match) {
          return {
            videoId: match[1],
            youtubeUrl: `https://www.youtube.com/watch?v=${match[1]}`,
            iframeSrc: src,
          };
        }
      }

      // Check for video-id attributes
      const ytDiv = document.querySelector("[data-video-id], [data-yt-id], [data-youtube-id]");
      if (ytDiv) {
        const id = ytDiv.getAttribute("data-video-id") || ytDiv.getAttribute("data-yt-id") || ytDiv.getAttribute("data-youtube-id");
        if (id && id.length === 11) {
          return {
            videoId: id,
            youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
            iframeSrc: "",
          };
        }
      }
      await sleep(200);
    }
    return null;
  }

  const results = [];

  // 3. Loop through all lectures
  for (let i = 0; i < lectureItems.length; i++) {
    const item = lectureItems[i];
    const indexNum = i + 1;

    console.log(`▶️ [${indexNum}/${lectureItems.length}] Navigating to: ${item.title} (${item.week})...`);

    // Scroll and click lecture
    item.el.scrollIntoView({ behavior: "smooth", block: "center" });
    await sleep(150);
    item.el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
    item.el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    item.el.click();

    // Wait for the YouTube player iframe to mount
    const videoData = await waitForYouTubeVideo(3000);

    const entry = {
      index: indexNum,
      week: item.week,
      title: item.title,
      videoId: videoData ? videoData.videoId : null,
      youtubeUrl: videoData ? videoData.youtubeUrl : null,
      iframeSrc: videoData ? videoData.iframeSrc : null,
    };

    results.push(entry);

    if (entry.videoId) {
      console.log(`✅ [${indexNum}/${lectureItems.length}] Video ID: ${entry.videoId}`);
    } else {
      console.warn(`⚠️ [${indexNum}/${lectureItems.length}] Could not find video ID for: ${item.title}`);
    }

    await sleep(400);
  }

  // 4. Download final JSON
  console.log("🎉 ALL VIDEO IDS HARVESTED! Preparing download...");
  const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${courseSlug}_videos.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log(`📁 Downloaded '${courseSlug}_videos.json' successfully!`);
})();
