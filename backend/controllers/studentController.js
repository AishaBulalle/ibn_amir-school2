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
  const { username, email, role, password } = req.body;

  if (role === 'teacher' && !password) {
    return res
      .status(400)
      .json({ message: 'Password is required for teachers' });
  }

  studentModel.addUser(username, email, role, password, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, username, email, role });
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  studentModel.deleteStudent(id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
};

module.exports = {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
