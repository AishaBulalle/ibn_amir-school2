// src/services/enrollmentService.js
const API_URL = 'http://localhost:5173';

export const getEnrollments = async () => {
  const response = await fetch(`${API_URL}/enrollments`);
  if (!response.ok) {
    throw new Error('Failed to fetch enrollments');
  }
  return response.json();
};

export const addEnrollment = async (enrollment) => {
  const response = await fetch(`${API_URL}/enrollments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(enrollment),
  });
  if (!response.ok) {
    throw new Error('Failed to add enrollment');
  }
  return response.json();
};

// Add other functions like updateEnrollment, deleteEnrollment, etc.
