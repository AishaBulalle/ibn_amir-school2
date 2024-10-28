import React from 'react';

// Define the type for the enrollment prop
type Enrollment = {
  student_id: number;
  course_id: number;
  enrollment_date: string; // Add other properties as needed
};

// Define the props type for the component
type EnrollmentCardProps = {
  enrollment: Enrollment; // Using the Enrollment type for the enrollment prop
};

const EnrollmentCard: React.FC<EnrollmentCardProps> = ({ enrollment }) => {
  return (
    <div className="enrollment-card">
      <h2>Enrollment for Student ID: {enrollment.student_id}</h2>
      <p>Course ID: {enrollment.course_id}</p>
      <p>Enrollment Date: {enrollment.enrollment_date}</p>
      {/* Add more enrollment details as needed */}
    </div>
  );
};

export default EnrollmentCard;
