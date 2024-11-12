const db = require('../config/db'); // Assuming you have a db.js file for DB connection

const getAllCourses = (callback) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, callback);
};

const getCourseById = (id, callback) => {
  const sql = 'SELECT * FROM courses WHERE id = ?';
  db.query(sql, [id], callback);
};

const addCourse = (course_name, description, teacher_id, callback) => {
  const sql =
    'INSERT INTO courses (course_name, description, teacher_id) VALUES (?, ?, ?)';
  db.query(sql, [course_name, description, teacher_id], callback);
};

const updateCourse = (id, course_name, description, teacher_id, callback) => {
  const sql =
    'UPDATE courses SET course_name = ?, description = ?, teacher_id = ? WHERE id = ?';
  db.query(sql, [course_name, description, teacher_id, id], callback);
};

const deleteCourse = (id, callback) => {
  const sql = 'DELETE FROM courses WHERE id = ?';
  db.query(sql, [id], callback);
};

const getCoursesByStudentId = (studentId, callback) => {
  const sql = `
    SELECT courses.id, courses.course_name, courses.description, enrollments.enrollment_date
    FROM enrollments
    JOIN courses ON enrollments.course_id = courses.id
    WHERE enrollments.student_id = ?
  `;
  db.query(sql, [studentId], callback);
};

// Other CRUD operations (delete, update, etc.) can be added similarly

module.exports = {
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
  getCoursesByStudentId,
};
