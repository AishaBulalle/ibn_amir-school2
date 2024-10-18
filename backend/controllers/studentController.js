const studentModel = require('../models/studentModel');

const getStudents = (req, res) => {
  studentModel.getAllStudents((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  studentModel.getStudentById(id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result) return res.status(404).json({ message: 'Student not found' });
    res.json(result);
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  studentModel.updateStudent(id, username, email, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Student updated successfully' });
  });
};

const createStudent = (req, res) => {
  const { username, password, email } = req.body;
  studentModel.addStudent(username, password, email, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, username, email });
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  studentModel.deleteStudent(id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send(); // No content to send back
  });
};

// Other controller methods for update and delete can be added similarly

module.exports = {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
