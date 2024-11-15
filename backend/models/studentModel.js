require('dotenv').config();

const mysql = require('mysql2');

//const db = mysql.createConnection({
// host: 'localhost',
//user: 'root',
// password: 'aisha123',
//  database: 'ibn_amir_school2',
//});

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST, // MySQL Host, will be different locally and in Azure
  user: process.env.MYSQL_USER, // MySQL Username
  password: process.env.MYSQL_PASSWORD, // MySQL Password
  database: process.env.MYSQL_DATABASE,
});

const getAllStudents = (callback) => {
  const sql = 'SELECT * FROM users WHERE role = "student"';
  db.query(sql, callback);
};

const getStudentById = (id, callback) => {
  const sql = 'SELECT * FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    const student = results.length > 0 ? results[0] : null;
    callback(null, student);
  });
};

const updateStudent = (id, username, email, callback) => {
  const sql =
    'UPDATE users SET username = ?, email = ? WHERE id = ? AND role = "student"';
  db.query(sql, [username, email, id], callback);
};

const addUser = (username, email, role, password, callback) => {
  const sql = password
    ? 'INSERT INTO users (username, email, role, password) VALUES (?, ?, ?, ?)'
    : 'INSERT INTO users (username, email, role) VALUES (?, ?, ?)';

  const params = password
    ? [username, email, role, password]
    : [username, email, role];

  db.query(sql, params, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

const deleteStudent = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], callback);
};

module.exports = {
  getAllStudents,
  addUser,
  getStudentById,
  updateStudent,
  deleteStudent,
};
