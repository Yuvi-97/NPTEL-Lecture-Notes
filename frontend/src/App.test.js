import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { COURSES, getCourseBySlug, getAdjacentLectures } from './data/courses';

test('renders NPTEL Notes brand and navigation', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/NPTEL Notes/i);
  expect(brandElements.length).toBeGreaterThan(0);
  expect(screen.getByText(/Personal Revision Workspace/i)).toBeInTheDocument();
  expect(screen.getByText(/My Courses/i)).toBeInTheDocument();
});

test('renders both specified courses on homepage', () => {
  render(<App />);
  expect(screen.getByText(/Logistics & Supply Chain Management/i)).toBeInTheDocument();
  expect(screen.getByText(/Industrial Safety Engineering/i)).toBeInTheDocument();
  const weekBadges = screen.getAllByText(/12 Weeks/i);
  expect(weekBadges.length).toBeGreaterThanOrEqual(2);
});

test('filters courses when user types in search box', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search courses or notes/i);

  // Filter for Logistics
  fireEvent.change(searchInput, { target: { value: 'Logistics' } });
  expect(screen.getByText(/Logistics & Supply Chain Management/i)).toBeInTheDocument();
  expect(screen.queryByText(/Industrial Safety Engineering/i)).not.toBeInTheDocument();

  // Reset search
  fireEvent.change(searchInput, { target: { value: '' } });
  expect(screen.getByText(/Logistics & Supply Chain Management/i)).toBeInTheDocument();
  expect(screen.getByText(/Industrial Safety Engineering/i)).toBeInTheDocument();
});

test('data model contains 12 weeks with lectures for each course', () => {
  expect(COURSES).toHaveLength(2);

  COURSES.forEach((course) => {
    expect(course.weekList).toHaveLength(12);
    course.weekList.forEach((week) => {
      expect(week.lectures.length).toBeGreaterThanOrEqual(1);
      expect(week.lectures[0].title).toMatch(/Lecture/i);
    });
  });
});

test('adjacent lecture navigation works across week boundaries', () => {
  // End of Week 1 -> Start of Week 2
  const transitionToWeek2 = getAdjacentLectures('logistics', 1, 5);
  expect(transitionToWeek2.nextLecture).not.toBeNull();
  expect(transitionToWeek2.nextLecture.weekNumber).toBe(2);
  expect(transitionToWeek2.nextLecture.lectureNumber).toBe(1);

  // Start of Week 2 -> End of Week 1
  const transitionToWeek1 = getAdjacentLectures('logistics', 2, 1);
  expect(transitionToWeek1.prevLecture).not.toBeNull();
  expect(transitionToWeek1.prevLecture.weekNumber).toBe(1);
  expect(transitionToWeek1.prevLecture.lectureNumber).toBe(5);

  // Beginning of Course has no previous
  const courseStart = getAdjacentLectures('logistics', 1, 1);
  expect(courseStart.prevLecture).toBeNull();

  // End of Course has no next
  const courseEnd = getAdjacentLectures('logistics', 12, 5);
  expect(courseEnd.nextLecture).toBeNull();
});

test('loadLectureNote returns markdown content', async () => {
  const { loadLectureNote } = require('./services/notesLoader');
  const note = await loadLectureNote('logistics', 1, 1);
  expect(typeof note).toBe('string');
  expect(note).toContain('Lecture 1');
});

test('exam notes loaders and metadata helper work for all 12 weeks', async () => {
  const fs = require('fs');
  const path = require('path');
  const { loadConsolidatedNote } = require('./services/notesLoader');
  const { hasWeekExamNotes, getWeekExamNotesInfo } = require('./data/courses');

  for (let week = 1; week <= 12; week++) {
    expect(hasWeekExamNotes('logistics', week)).toBe(true);
    const info = getWeekExamNotesInfo('logistics', week);
    expect(info).not.toBeNull();
    const padded = String(week).padStart(2, '0');
    expect(info.title).toContain(`Week ${padded}`);

    // Verify loader returns string in test environment
    const content = await loadConsolidatedNote('logistics', week);
    expect(typeof content).toBe('string');
    expect(content).toContain('Consolidated Exam Notes');

    // Verify physical file exists and contains full exam-oriented sections
    const filePath = path.join(__dirname, 'notes', 'logistics', 'exam-notes', `week-${padded}.md`);
    expect(fs.existsSync(filePath)).toBe(true);
    const fileText = fs.readFileSync(filePath, 'utf-8');
    expect(fileText.length).toBeGreaterThan(1000);
    expect(fileText).toContain('Consolidated');
    expect(fileText).toContain('Quick Revision Sheet');
    // Ensure numerical formulas and practice question sections were removed
    expect(fileText).not.toContain('Formulas and Numerical Methods');
    expect(fileText).not.toContain('Practice Questions with Answer Key');
  }

  // Master course revision should no longer exist
  const masterPath = path.join(__dirname, 'notes', 'logistics', 'exam-notes', 'complete-course-revision.md');
  expect(fs.existsSync(masterPath)).toBe(false);
});

