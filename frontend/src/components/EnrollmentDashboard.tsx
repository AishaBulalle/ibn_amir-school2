import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';
import {
  getCoursesByStudentId,
  addEnrollment,
  updateEnrollment,
} from '../services/enrollmentService';
import { Student } from '../types/Student';
import '../styles/Dashboard.css';

const EnrollmentDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Record<number, any[]>>({});
  const [selectedCourseIds, setSelectedCourseIds] = useState<
    Record<number, number | null>
  >({});
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    fetchStudentsAndCourses();
  }, []);

  const fetchStudentsAndCourses = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      fetchCoursesForAllStudents(data);
    } catch (error) {
      console.error('Error fetching students or courses:', error);
    }
  };

  const fetchCoursesForAllStudents = async (studentList: Student[]) => {
    const courseData: Record<number, any[]> = {};
    for (const student of studentList) {
      try {
        const studentCourses = await getCoursesByStudentId(student.id!);
        courseData[student.id!] = studentCourses;
      } catch (error) {
        console.error(
          `Error fetching courses for student ${student.id}:`,
          error
        );
      }
    }
    setCourses(courseData);
  };

  const handleAddCourse = async (studentId: number) => {
    const selectedCourseId = selectedCourseIds[studentId];
    if (selectedCourseId !== null) {
      // Check if the student is already enrolled in any course
      const currentCourses = courses[studentId] || [];
      if (currentCourses.length > 0) {
        setErrorMessage('A student can only enroll in one course at a time.');
        return; // Don't allow adding a course if the student is already enrolled in one
      }

      await addEnrollment(studentId, selectedCourseId);
      fetchCoursesForAllStudents(students); // Refresh the list of courses
      setErrorMessage(''); // Clear any previous error messages
    }
  };

  const handleUpdateCourse = async (studentId: number) => {
    const selectedCourseId = selectedCourseIds[studentId];
    const currentCourses = courses[studentId] || [];

    if (selectedCourseId !== null && currentCourses.length > 0) {
      await updateEnrollment(studentId, selectedCourseId);
      fetchCoursesForAllStudents(students); // Refresh the list of courses
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setErrorMessage(
        'No course selected or student is not enrolled in any course.'
      );
    }
  };

  return (
    <div>
      {/* Display the error message at the top */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <div className="student-info">
              <p>👤 {student.username}</p>
              <p>{student.email}</p>
              <h4>Courses:</h4>
              <ul className="course-list">
                {courses[student.id!]?.map((course) => (
                  <li key={course.id}>{course.course_name}</li>
                )) || <li>No courses found</li>}
              </ul>
              <div className="course-update">
                <select
                  value={selectedCourseIds[student.id!] || ''}
                  onChange={(e) =>
                    setSelectedCourseIds({
                      ...selectedCourseIds,
                      [student.id!]: Number(e.target.value),
                    })
                  }
                >
                  <option value="">Select a Course</option>
                  <option value="1">Quran Recitation</option>
                  <option value="2">Arabic Language</option>
                  <option value="3">Islamic Studies</option>
                </select>
                <button
                  onClick={() => handleAddCourse(student.id!)}
                  className="add-course"
                >
                  Add
                </button>
                <button
                  onClick={() => handleUpdateCourse(student.id!)}
                  className="update-course"
                >
                  Update
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentDashboard;
