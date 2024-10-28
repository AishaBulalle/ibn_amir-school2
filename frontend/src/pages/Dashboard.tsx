import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService'; // Correct import for student service
import { Student } from '../types/Student'; // Correct import for Student type

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]); // Using TypeScript for state

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents(); // Fetching student data
        setStudents(data); // Updating state with fetched data
      } catch (error) {
        console.error('Error fetching students:', error); // Error handling
      }
    };

    fetchStudents(); // Call the function to fetch students
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.username} - {student.email} {/* Display student info */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
