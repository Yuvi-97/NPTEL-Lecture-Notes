/**
 * Notes Loader Service.
 * In Webpack (Create React App), require.context indexes all markdown files
 * and returns their static asset URLs.
 * We fetch the raw text from the asset URL, and cache it for instant revisits.
 */

const noteCache = new Map();

// Webpack require.context to discover all markdown notes
let markdownContext = null;
try {
  markdownContext = require.context('../notes', true, /\.md$/);
} catch (e) {
  // Graceful fallback if require.context is unavailable (e.g. unit test runner)
  markdownContext = null;
}

/**
 * Loads markdown content for a given course, week, and lecture.
 * @param {string} courseSlug - e.g. 'logistics' or 'industrial-safety'
 * @param {number|string} weekNumber - e.g. 1
 * @param {number|string} lectureNumber - e.g. 1
 * @returns {Promise<string>}
 */
export async function loadLectureNote(courseSlug, weekNumber, lectureNumber) {
  const weekPadded = String(weekNumber).padStart(2, '0');
  const lecturePadded = String(lectureNumber).padStart(2, '0');
  const relativePath = `./${courseSlug}/week-${weekPadded}/lecture-${lecturePadded}.md`;
  const cacheKey = `${courseSlug}-${weekNumber}-${lectureNumber}`;

  if (noteCache.has(cacheKey)) {
    return noteCache.get(cacheKey);
  }

  if (markdownContext) {
    try {
      const keys = markdownContext.keys();
      if (keys.includes(relativePath)) {
        const fileAssetUrl = markdownContext(relativePath);
        const response = await fetch(fileAssetUrl);
        if (!response.ok) {
          throw new Error(`Failed to load note: HTTP ${response.status}`);
        }
        const text = await response.text();
        noteCache.set(cacheKey, text);
        return text;
      }
    } catch (err) {
      console.warn(`Error loading markdown via context: ${err.message}`);
    }
  }

  // Fallback: If not found or context fails, return a friendly fallback note
  return `# Lecture ${lectureNumber} — Placeholder Topic ${lectureNumber}\n\n> Note file (\`${courseSlug}/week-${weekPadded}/lecture-${lecturePadded}.md\`) was not found or is currently being prepared.\n\n## Content Pending\n\nNotes for this lecture will be added soon.`;
}

/**
 * Loads consolidated exam notes for a given course and week.
 * @param {string} courseSlug - e.g. 'logistics'
 * @param {number|string} weekNumber - e.g. 1
 * @returns {Promise<string>}
 */
export async function loadConsolidatedNote(courseSlug, weekNumber) {
  const weekPadded = String(weekNumber).padStart(2, '0');
  const cacheKey = `${courseSlug}-consolidated-week-${weekPadded}`;

  if (noteCache.has(cacheKey)) {
    return noteCache.get(cacheKey);
  }

  const candidatePaths = [
    `./${courseSlug}/exam-notes/week-${weekPadded}.md`,
    `./${courseSlug}/exam-notes/Week_${weekPadded}_Consolidated_Notes.md`,
  ];

  if (markdownContext) {
    try {
      const keys = markdownContext.keys();
      for (const relPath of candidatePaths) {
        if (keys.includes(relPath)) {
          const fileAssetUrl = markdownContext(relPath);
          const response = await fetch(fileAssetUrl);
          if (response.ok) {
            const text = await response.text();
            noteCache.set(cacheKey, text);
            return text;
          }
        }
      }
    } catch (err) {
      console.warn(`Error loading consolidated note: ${err.message}`);
    }
  }

  return `# Week ${weekNumber} — Consolidated Exam Notes\n\n> Consolidated exam notes for ${courseSlug} Week ${weekNumber} are currently being prepared.`;
}

