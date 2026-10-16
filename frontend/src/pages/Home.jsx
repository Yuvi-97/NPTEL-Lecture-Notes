import React, { useState, useMemo } from 'react';
import HeroSection from '../components/home/HeroSection';
import CourseSection from '../components/home/CourseSection';
import { COURSES } from '../data/courses';

/**
 * Main Home page composition.
 * Manages search filter state across course title, description, and metadata.
 */
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Controlled real-time client-side search filtering
  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return COURSES;
    }

    return COURSES.filter((course) => {
      const matchTitle = course.title.toLowerCase().includes(query);
      const matchDesc = course.description.toLowerCase().includes(query);
      const matchCode = course.code.toLowerCase().includes(query);
      const matchBadge = course.badge ? course.badge.toLowerCase().includes(query) : false;
      return matchTitle || matchDesc || matchCode || matchBadge;
    });
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <main className="flex-1 w-full">
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={handleClearSearch}
        totalResults={filteredCourses.length}
        isFiltered={searchQuery.trim().length > 0}
      />

      <CourseSection
        courses={filteredCourses}
        onResetSearch={handleClearSearch}
      />
    </main>
  );
}
