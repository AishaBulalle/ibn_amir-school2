import React from 'react';

// Define the type for the course prop
type Course = {
  course_name: string;
  description: string;
  teacher_id: number; // Add other properties as needed
};

// Define the props type for the component
type CourseCardProps = {
  course: Course; // Using the Course type for the course prop
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.course_name}</h2>
      <p>Description: {course.description}</p>
      {/* Add more course details as needed */}
    </div>
  );
};

export default CourseCard;
