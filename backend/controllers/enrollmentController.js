const enrollmentModel = require('../models/enrollmentModel');

const getEnrollments = (req, res) => {
  enrollmentModel.getAllEnrollments((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

const getEnrollmentById = (req, res) => {
  const { id } = req.params;
  enrollmentModel.getEnrollmentById(id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: 'Enrollment not found' });
    res.json(results[0]);
  });
};

const createEnrollment = (req, res) => {
  const { student_id, course_id } = req.body;
  enrollmentModel.addEnrollment(student_id, course_id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, student_id, course_id });
  });
};

const updateEnrollment = (req, res) => {
  const { id } = req.params;
  const { student_id, course_id } = req.body;

  enrollmentModel.updateEnrollment(id, student_id, course_id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Enrollment updated successfully' });
  });
};

const deleteEnrollment = (req, res) => {
  const { id } = req.params;

  enrollmentModel.deleteEnrollment(id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send(); // No content to send back
  });
};

module.exports = {
  getEnrollments,
  createEnrollment,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
