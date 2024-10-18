const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aisha123',
  database: 'ibn_amir_school2',
});

// Get all students
const getAllStudents = (callback) => {
  const sql = 'SELECT * FROM users WHERE role = "student"';
  db.query(sql, callback);
};

const getStudentById = (id, callback) => {
  const sql = 'SELECT * FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    // Check if the result is empty
    const student = results.length > 0 ? results[0] : null;
    callback(null, student);
  });
};

const updateStudent = (id, username, email, callback) => {
  const sql =
    'UPDATE users SET username = ?, email = ? WHERE id = ? AND role = "student"';
  db.query(sql, [username, email, id], callback);
};

// Add a student
const addStudent = (username, password, email, callback) => {
  const sql =
    'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, "student")';
  db.query(sql, [username, password, email], callback);
};

const deleteStudent = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], callback);
};

// Other CRUD operations (delete, get by ID, update) can be added similarly

module.exports = {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
