import React, { useEffect, useState } from 'react';
import {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
} from '../services/studentService';
import { Student } from '../types/Student';
import './Dashboard.css';

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Omit<Student, 'id'>>({
    username: '',
    email: '',
  });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchId, setSearchId] = useState<string>('');
  const [searchedStudent, setSearchedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async () => {
    if (newStudent.username && newStudent.email) {
      await addStudent(newStudent);
      fetchStudents();
      setNewStudent({ username: '', email: '' });
    } else {
      console.error('Username and email are required to add a student.');
    }
  };

  const handleDeleteStudent = async (id: number) => {
    if (id) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  const handleUpdateStudent = async () => {
    if (editingStudent) {
      await updateStudent(editingStudent.id!, editingStudent);
      fetchStudents();
      setEditingStudent(null);
    }
  };

  const handleSearchStudent = async () => {
    try {
      const student = await getStudentById(Number(searchId));
      setSearchedStudent(student);
    } catch (error) {
      console.error('Error fetching student by ID:', error);
      setSearchedStudent(null);
    }
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <input
        type="text"
        placeholder="Username"
        value={newStudent.username}
        onChange={(e) =>
          setNewStudent({ ...newStudent, username: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={newStudent.email}
        onChange={(e) =>
          setNewStudent({ ...newStudent, email: e.target.value })
        }
      />
      <button onClick={handleAddStudent}>Add Student</button>

      {editingStudent && (
        <div>
          <h2>Edit Student</h2>
          <input
            type="text"
            value={editingStudent.username}
            onChange={(e) =>
              setEditingStudent({ ...editingStudent, username: e.target.value })
            }
          />
          <input
            type="email"
            value={editingStudent.email}
            onChange={(e) =>
              setEditingStudent({ ...editingStudent, email: e.target.value })
            }
          />
          <button onClick={handleUpdateStudent}>Update Student</button>
        </div>
      )}

      <h2>Search Student by ID</h2>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearchStudent}>Search</button>

      {searchedStudent && (
        <div>
          <h3>Found Student:</h3>
          <p>ID: {searchedStudent.id}</p>
          <p>Username: {searchedStudent.username}</p>
          <p>Email: {searchedStudent.email}</p>
        </div>
      )}

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.username} - {student.email}
            <button onClick={() => handleDeleteStudent(student.id!)}>
              Delete
            </button>
            <button onClick={() => setEditingStudent(student)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
