const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

// Route to get all enrollments
router.get('/', enrollmentController.getAllEnrollments);

// Route to add a new enrollment
router.post('/', enrollmentController.addEnrollment);

// Route to get an enrollment by ID
router.get('/:id', enrollmentController.getEnrollmentById);

// Route to update an enrollment
router.put('/student/:studentId', enrollmentController.updateEnrollment);

// Route to delete an enrollment
router.delete('/:id', enrollmentController.deleteEnrollment);

// Route to get courses by student ID (this should belong to enrollment routes)
router.get('/student/:studentId', enrollmentController.getCoursesByStudentId);

module.exports = router;
