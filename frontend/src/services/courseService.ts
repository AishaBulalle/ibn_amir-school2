// src/services/courseService.ts
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

export const addCourse = async (course: {
  course_name: string;
  description: string;
  teacher_id: number;
}) => {
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

export const getCoursesByStudentId = async (studentId: number) => {
  const response = await fetch(`${API_URL}/courses/student/${studentId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses for student');
  }
  return response.json();
};

// You can add other functions like updateCourse, deleteCourse, etc., here as needed
