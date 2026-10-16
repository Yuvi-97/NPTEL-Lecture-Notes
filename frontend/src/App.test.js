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

test('data model contains exactly 12 weeks and 5 lectures per week', () => {
  expect(COURSES).toHaveLength(2);

  COURSES.forEach((course) => {
    expect(course.weekList).toHaveLength(12);
    course.weekList.forEach((week) => {
      expect(week.lectures).toHaveLength(5);
      expect(week.lectures[0].title).toMatch(/Lecture 1/i);
      expect(week.lectures[1].title).toMatch(/Lecture 2/i);
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
