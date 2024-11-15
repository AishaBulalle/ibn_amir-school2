const enrollmentModel = require('../models/enrollmentModel');

const getAllEnrollments = (req, res) => {
  enrollmentModel.getAllEnrollments((err, enrollments) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(enrollments);
  });
};

const addEnrollment = (req, res) => {
  const { student_id, course_id } = req.body;

  enrollmentModel.getCoursesByStudentId(student_id, (err, courses) => {
    if (err) return res.status(500).json({ error: err.message });
    if (courses.length > 0) {
      return res
        .status(400)
        .json({ message: 'Student is already enrolled in a course.' });
    }

    enrollmentModel.addEnrollment(student_id, course_id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: 'Enrollment added successfully',
        id: result.insertId,
      });
    });
  });
};

const getEnrollmentById = (req, res) => {
  const { id } = req.params;

  enrollmentModel.getEnrollmentById(id, (err, enrollment) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!enrollment.length)
      return res.status(404).json({ message: 'Enrollment not found' });
    res.json(enrollment[0]);
  });
};

const updateEnrollment = (req, res) => {
  const { studentId } = req.params;
  const { course_id } = req.body;

  enrollmentModel.updateEnrollment(studentId, course_id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    res.status(200).json({ message: 'Enrollment updated successfully' });
  });
};

const deleteEnrollment = (req, res) => {
  const { id } = req.params;

  enrollmentModel.deleteEnrollment(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};

const getCoursesByStudentId = (req, res) => {
  const { studentId } = req.params;

  enrollmentModel.getCoursesByStudentId(studentId, (err, courses) => {
    if (err) return res.status(500).json({ error: err.message });
    if (courses.length === 0)
      return res.status(404).json({ message: 'No courses found' });
    res.json(courses);
  });
};

module.exports = {
  getAllEnrollments,
  addEnrollment,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
  getCoursesByStudentId,
};
