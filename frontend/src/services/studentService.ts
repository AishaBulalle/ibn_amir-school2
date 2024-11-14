import { Student } from '../types/Student';

const API_URL =
  'https://ibnamer-backend-arghgkfthtbjbzcs.swedencentral-01.azurewebsites.net';

export const getStudents = async () => {
  const response = await fetch(`${API_URL}/students`);
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return response.json();
};

export const addStudent = async (student: Omit<Student, 'id'>) => {
  const studentData = {
    ...student,
    role: 'student',
  };

  const response = await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });

  if (!response.ok) {
    throw new Error('Failed to add student');
  }
  return response.json();
};

export const updateStudent = async (id: number, student: Student) => {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error('Failed to update student');
  }
  return response.json();
};

export const deleteStudent = async (id: number) => {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete student');
  }
};

export const getStudentById = async (id: number) => {
  const response = await fetch(`${API_URL}/students/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch student by ID');
  }
  return response.json();
};
