import React from 'react';

import { content } from '../../../pages/courses/start-learning/openWaterCourse';
import CourseStep from './CourseStep';

const CourseHighlights = () => {
  return (
    <section className="container my-24 space-y-12">
      <h2 className="text-4xl font-normal font-kalnia">Course Highlight</h2>

      <div className="space-y-12">
        <CourseStep step={content.how.steps.one} index={0} />
        <CourseStep step={content.how.steps.two} index={1} />
        <CourseStep step={content.how.steps.three} index={2} />
      </div>
    </section>
  );
};

export default CourseHighlights;
