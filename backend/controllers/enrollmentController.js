const enrollmentModel = require('../models/enrollmentModel');

// Controller to get all enrollments
const getAllEnrollments = (req, res) => {
  enrollmentModel.getAllEnrollments((err, enrollments) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(enrollments);
  });
};

// Controller to add a new enrollment
const addEnrollment = (req, res) => {
  const { student_id, course_id } = req.body;

  // Check if the student is already enrolled in a course
  enrollmentModel.getCoursesByStudentId(student_id, (err, courses) => {
    if (err) return res.status(500).json({ error: err.message });
    if (courses.length > 0) {
      return res
        .status(400)
        .json({ message: 'Student is already enrolled in a course.' });
    }

    // Proceed with adding enrollment if the student is not enrolled in any course
    enrollmentModel.addEnrollment(student_id, course_id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: 'Enrollment added successfully',
        id: result.insertId,
      });
    });
  });
};

// Controller to get an enrollment by ID
const getEnrollmentById = (req, res) => {
  const { id } = req.params;

  enrollmentModel.getEnrollmentById(id, (err, enrollment) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!enrollment.length)
      return res.status(404).json({ message: 'Enrollment not found' });
    res.json(enrollment[0]);
  });
};

// Controller to update an enrollment
const updateEnrollment = (req, res) => {
  const { studentId } = req.params; // This will capture studentId from the URL
  const { course_id } = req.body;

  // Call the model to update the enrollment for the student
  enrollmentModel.updateEnrollment(studentId, course_id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    res.status(200).json({ message: 'Enrollment updated successfully' });
  });
};

// Controller to delete an enrollment
const deleteEnrollment = (req, res) => {
  const { id } = req.params;

  enrollmentModel.deleteEnrollment(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};

// Controller to get courses by student ID
const getCoursesByStudentId = (req, res) => {
  const { studentId } = req.params; // Access the studentId parameter from the URL

  enrollmentModel.getCoursesByStudentId(studentId, (err, courses) => {
    if (err) return res.status(500).json({ error: err.message });
    if (courses.length === 0)
      return res.status(404).json({ message: 'No courses found' });
    res.json(courses); // Send courses as response
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
