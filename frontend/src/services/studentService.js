// src/services/studentService.js

const API_URL = 'http://localhost:5001';

export const getStudents = async () => {
  const response = await fetch(`${API_URL}/students`);
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return response.json();
};

export const addStudent = async (student) => {
  const response = await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error('Failed to add student');
  }
  return response.json();
};

// Add other functions like updateStudent, deleteStudent, etc.
