const db = require('../config/db');

const getAllEnrollments = (callback) => {
  const sql = 'SELECT * FROM enrollments';
  db.query(sql, callback);
};

const addEnrollment = (student_id, course_id, callback) => {
  const sql =
    'INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (?, ?, CURDATE())';
  db.query(sql, [student_id, course_id], callback);
};

// New method to get an enrollment by ID
const getEnrollmentById = (id, callback) => {
  const sql = 'SELECT * FROM enrollments WHERE id = ?';
  db.query(sql, [id], callback);
};

// New method to update an enrollment
const updateEnrollment = (id, student_id, course_id, callback) => {
  const sql =
    'UPDATE enrollments SET student_id = ?, course_id = ? WHERE id = ?';
  db.query(sql, [student_id, course_id, id], callback);
};

// New method to delete an enrollment
const deleteEnrollment = (id, callback) => {
  const sql = 'DELETE FROM enrollments WHERE id = ?';
  db.query(sql, [id], callback);
};

// Other CRUD operations (delete, etc.) can be added similarly

module.exports = {
  getAllEnrollments,
  addEnrollment,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
