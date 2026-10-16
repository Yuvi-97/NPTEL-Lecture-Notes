/**
 * Centralized data source for NPTEL revision courses.
 * Manages metadata, week configurations, and lecture entries.
 *
 * HOW TO CUSTOMIZE:
 * - To change lecture titles: edit the lecture object's `title` field.
 * - To change the number of lectures in a week: add or remove lecture objects in that week's `lectures` array.
 * - To update week descriptions/titles: edit the week object's `title` field.
 */

/**
 * Helper to build the default 12-week structure with 5 lectures each.
 * Can be customized per course as needed.
 */
function createDefaultWeeks(courseSlug, courseDefaultTitle) {
  const weeks = [];
  for (let w = 1; w <= 12; w++) {
    const weekPad = String(w).padStart(2, '0');
    const lectures = [];

    const week1LogisticsTitles = [
      'Lecture 1 — Introduction to Logistics',
      'Lecture 2 — Stakeholders in Logistics and Modern Concepts',
      'Lecture 3 — Manufacturing Logistics and Industry Scenario',
      'Lecture 4 — Storage, Warehousing and Cross-Docking',
      'Lecture 5 — Logistics Service Providers',
    ];

    for (let l = 1; l <= 5; l++) {
      const lecPad = String(l).padStart(2, '0');
      let title = `Lecture ${l} — Placeholder Topic ${l}`;
      
      if (courseSlug === 'logistics' && w === 1 && week1LogisticsTitles[l - 1]) {
        title = week1LogisticsTitles[l - 1];
      } else if (l === 1) {
        title = `Lecture 1 — Introduction`;
      }

      lectures.push({
        lectureNumber: l,
        title,
        markdownPath: `${courseSlug}/week-${weekPad}/lecture-${lecPad}.md`,
      });
    }

    weeks.push({
      weekNumber: w,
      title: `Week ${w}`,
      description: `Revision notes for Week ${w} lecture concepts.`,
      lectures,
    });
  }
  return weeks;
}

export const COURSES = [
  {
    id: 'logistics',
    slug: 'logistics',
    code: 'Course 01',
    title: 'Logistics & Supply Chain Management',
    description: 'Explore logistics fundamentals, supply chain concepts, stakeholders, and related topics.',
    weeks: '12 Weeks',
    weeksCount: 12,
    iconType: 'truck',
    badge: 'Supply Chain & Operations',
    weekList: createDefaultWeeks('logistics', 'Logistics & Supply Chain Management'),
  },
  {
    id: 'industrial-safety',
    slug: 'industrial-safety',
    code: 'Course 02',
    title: 'Industrial Safety Engineering',
    description: 'Review industrial safety concepts, workplace hazards, prevention, and safety practices.',
    weeks: '12 Weeks',
    weeksCount: 12,
    iconType: 'shield',
    badge: 'Safety & Compliance',
    weekList: createDefaultWeeks('industrial-safety', 'Industrial Safety Engineering'),
  },
];

/**
 * Finds a course by slug or id.
 * @param {string} slug
 */
export function getCourseBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return COURSES.find(
    (c) => c.slug === normalized || c.id === normalized || (c.id === 'logistics' && normalized.includes('logistics')) || (c.id === 'industrial-safety' && normalized.includes('safety'))
  ) || null;
}

/**
 * Retrieves week data for a given course and week number.
 */
export function getWeekData(courseSlug, weekNumber) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;

  const wNum = parseInt(weekNumber, 10);
  const week = course.weekList.find((w) => w.weekNumber === wNum);
  if (!week) return null;

  return { course, week };
}

/**
 * Retrieves lecture data for a given course, week, and lecture number.
 */
export function getLectureData(courseSlug, weekNumber, lectureNumber) {
  const weekData = getWeekData(courseSlug, weekNumber);
  if (!weekData) return null;

  const lNum = parseInt(lectureNumber, 10);
  const lecture = weekData.week.lectures.find((l) => l.lectureNumber === lNum);
  if (!lecture) return null;

  return {
    course: weekData.course,
    week: weekData.week,
    lecture,
  };
}

/**
 * Retrieves flattened list of all lectures for a course.
 */
export function getAllLecturesForCourse(courseSlug) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];

  const list = [];
  course.weekList.forEach((week) => {
    week.lectures.forEach((lec) => {
      list.push({
        courseSlug: course.slug,
        courseTitle: course.title,
        weekNumber: week.weekNumber,
        weekTitle: week.title,
        lectureNumber: lec.lectureNumber,
        title: lec.title,
        markdownPath: lec.markdownPath,
      });
    });
  });
  return list;
}

/**
 * Computes adjacent (previous and next) lectures across week boundaries.
 */
export function getAdjacentLectures(courseSlug, weekNumber, lectureNumber) {
  const allLectures = getAllLecturesForCourse(courseSlug);
  const wNum = parseInt(weekNumber, 10);
  const lNum = parseInt(lectureNumber, 10);

  const currentIndex = allLectures.findIndex(
    (item) => item.weekNumber === wNum && item.lectureNumber === lNum
  );

  if (currentIndex === -1) {
    return { prevLecture: null, nextLecture: null };
  }

  const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
  const nextLecture = currentIndex < allLectures.length - 1 ? allLectures[currentIndex + 1] : null;

  return { prevLecture, nextLecture };
}
