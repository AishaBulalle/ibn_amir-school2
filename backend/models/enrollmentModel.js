const db = require('../config/db');

// Get all enrollments
const getAllEnrollments = (callback) => {
  const sql = 'SELECT * FROM enrollments';
  db.query(sql, callback);
};

// Add a new enrollment with the current date as the enrollment date
const addEnrollment = (student_id, course_id, callback) => {
  const sql = `
    INSERT INTO enrollments (student_id, course_id, enrollment_date)
    VALUES (?, ?, CURDATE())
  `;
  db.query(sql, [student_id, course_id], callback);
};

// Get an enrollment by ID
const getEnrollmentById = (id, callback) => {
  const sql = 'SELECT * FROM enrollments WHERE id = ?';
  db.query(sql, [id], callback);
};

// Update an enrollment
const updateEnrollment = (studentId, courseId, callback) => {
  const sql = `
    UPDATE enrollments
    SET course_id = ?
    WHERE student_id = ?
  `;
  db.query(sql, [courseId, studentId], callback);
};

// Delete an enrollment
const deleteEnrollment = (id, callback) => {
  const sql = 'DELETE FROM enrollments WHERE id = ?';
  db.query(sql, [id], callback);
};

// Get courses by student ID
const getCoursesByStudentId = (studentId, callback) => {
  const sql = `
    SELECT courses.id, courses.course_name, courses.description, enrollments.enrollment_date
    FROM enrollments
    JOIN courses ON enrollments.course_id = courses.id
    WHERE enrollments.student_id = ?
  `;
  db.query(sql, [studentId], callback);
};

module.exports = {
  getAllEnrollments,
  addEnrollment,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
  getCoursesByStudentId,
};
