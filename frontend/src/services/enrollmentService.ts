const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getCoursesByStudentId = async (studentId: number) => {
  const response = await fetch(`${API_URL}/enrollments/student/${studentId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses for student');
  }
  return response.json();
};

export const addEnrollment = async (studentId: number, courseId: number) => {
  const response = await fetch(`${API_URL}/enrollments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ student_id: studentId, course_id: courseId }),
  });
  if (!response.ok) {
    throw new Error('Failed to add enrollment');
  }
  return response.json();
};

export const updateEnrollment = async (studentId: number, courseId: number) => {
  const response = await fetch(`${API_URL}/enrollments/student/${studentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ student_id: studentId, course_id: courseId }),
  });
  if (!response.ok) {
    throw new Error('Failed to update enrollment');
  }
  return response.json();
};
