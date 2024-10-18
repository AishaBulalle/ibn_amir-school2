const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/', enrollmentController.getEnrollments);
router.post('/', enrollmentController.createEnrollment);
router.get('/:id', enrollmentController.getEnrollmentById);
router.put('/:id', enrollmentController.updateEnrollment);
router.delete('/:id', enrollmentController.deleteEnrollment);

// Additional routes for deleting enrollments can be added here

module.exports = router;
