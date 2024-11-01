const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.post('/', studentController.createStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
