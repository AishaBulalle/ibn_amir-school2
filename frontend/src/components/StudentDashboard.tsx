import React, { useEffect, useState } from 'react';
import {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from '../services/studentService';
import { Student } from '../types/Student';
import '../styles/Dashboard.css';

const StudentDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Omit<Student, 'id'>>({
    username: '',
    email: '',
  });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

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

  return (
    <>
      <div className="form-section">
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
      </div>

      {editingStudent && (
        <div className="form-section">
          <h2>Edit Student</h2>
          <input
            type="text"
            value={editingStudent.username}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                username: e.target.value,
              })
            }
          />
          <input
            type="email"
            value={editingStudent.email}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                email: e.target.value,
              })
            }
          />
          <button onClick={handleUpdateStudent}>Update Student</button>
        </div>
      )}

      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <div className="student-info">
              <p>👤{student.username}</p>
              <p>{student.email}</p>
            </div>
            <div className="student-actions">
              <button
                onClick={() => handleDeleteStudent(student.id!)}
                className="delete"
              >
                Delete
              </button>
              <button onClick={() => setEditingStudent(student)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentDashboard;
