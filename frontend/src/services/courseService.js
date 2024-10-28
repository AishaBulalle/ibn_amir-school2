// src/services/courseService.js
const API_URL = 'http://localhost:5173';

export const getCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

export const addCourse = async (course) => {
  const response = await fetch(`${API_URL}/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(course),
  });
  if (!response.ok) {
    throw new Error('Failed to add course');
  }
  return response.json();
};

// Add other functions like updateCourse, deleteCourse, etc.
