const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'aisha123', // Replace with your MySQL password
  database: 'ibn_amir_school2',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Ibn Amir School API!');
});

// Teacher Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql =
    'SELECT * FROM users WHERE username = ? AND password = ? AND role = "teacher"';

  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user: results[0] });
  });
});

// CRUD Routes for Students

app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM users WHERE role = "student"';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/students', (req, res) => {
  const { username, password, email } = req.body;
  const sql =
    'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, "student")';
  db.query(sql, [username, password, email], (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, username, email });
  });
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
});

app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM users WHERE id = ? AND role = "student"';
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const sql =
    'UPDATE users SET username = ?, email = ? WHERE id = ? AND role = "student"';
  db.query(sql, [username, email, id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Student updated successfully' });
  });
});

// CRUD Routes for Courses
app.post('/courses', (req, res) => {
  const { course_name, description, teacher_id } = req.body;
  const sql =
    'INSERT INTO courses (course_name, description, teacher_id) VALUES (?, ?, ?)';
  db.query(sql, [course_name, description, teacher_id], (err, results) => {
    if (err) return res.status(500).json(err);
    res
      .status(201)
      .json({ id: results.insertId, course_name, description, teacher_id });
  });
});

app.get('/courses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;
  const { course_name, description, teacher_id } = req.body;
  const sql =
    'UPDATE courses SET course_name = ?, description = ?, teacher_id = ? WHERE id = ?';
  db.query(sql, [course_name, description, teacher_id, id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Course updated successfully' });
  });
});

app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM courses WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
});

// CRUD Routes for Enrollments
app.get('/enrollments', (req, res) => {
  const sql = 'SELECT * FROM enrollments';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/enrollments', (req, res) => {
  const { student_id, course_id } = req.body;
  const sql =
    'INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (?, ?, CURDATE())';
  db.query(sql, [student_id, course_id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, student_id, course_id });
  });
});

app.delete('/enrollments/:id', (req, res) => {
  const { id } = req.params; // This would be the enrollment ID
  const sql = 'DELETE FROM enrollments WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
