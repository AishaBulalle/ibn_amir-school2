const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/', enrollmentController.getAllEnrollments);
router.post('/', enrollmentController.addEnrollment);
router.get('/:id', enrollmentController.getEnrollmentById);
router.put('/student/:studentId', enrollmentController.updateEnrollment);
//router.put('/:id', enrollmentController.updateEnrollment);
router.delete('/:id', enrollmentController.deleteEnrollment);
router.get('/student/:studentId', enrollmentController.getCoursesByStudentId);

module.exports = router;
