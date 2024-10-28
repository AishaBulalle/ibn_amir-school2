import React from 'react';

// Define the type for the student prop
type Student = {
  username: string;
  email: string;
  // Add any other properties you expect here
};

// Define the props type for the component
type StudentCardProps = {
  student: Student; // Using the Student type for the student prop
};

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.username}</h2>
      <p>Email: {student.email}</p>
      {/* Add more student details as needed */}
    </div>
  );
};

export default StudentCard;
