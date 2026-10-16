const fs = require('fs');
const path = require('path');

const courses = ['logistics', 'industrial-safety'];
const totalWeeks = 12;
const lecturesPerWeek = 5;

const baseDir = path.join(__dirname, '..', 'src', 'notes');

let totalCreated = 0;

courses.forEach((course) => {
  for (let w = 1; w <= totalWeeks; w++) {
    const weekStr = String(w).padStart(2, '0');
    const weekDir = path.join(baseDir, course, `week-${weekStr}`);
    
    if (!fs.existsSync(weekDir)) {
      fs.mkdirSync(weekDir, { recursive: true });
    }

    for (let l = 1; l <= lecturesPerWeek; l++) {
      const lectureStr = String(l).padStart(2, '0');
      const filePath = path.join(weekDir, `lecture-${lectureStr}.md`);

      const content = `# Lecture ${l} — Replace With Actual Title

> TODO: Replace this placeholder with AI-generated notes based strictly on the NPTEL lecture transcript.

## Key Concepts

- Add notes here.

## Important Points

- Add notes here.

## Definitions

- Add definitions here if present in the transcript.

## Examples

- Add examples here if discussed in the lecture.

## Quick Revision

- Add important revision points here.
`;

      fs.writeFileSync(filePath, content, 'utf8');
      totalCreated++;
    }
  }
});

console.log(`Successfully generated ${totalCreated} placeholder markdown files.`);
