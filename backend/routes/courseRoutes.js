const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to get all courses
router.get('/', courseController.getCourses);

// Route to get a course by its ID
router.get('/:id', courseController.getCourseById);

// Route to add a new course
router.post('/', courseController.createCourse);

// Route to update an existing course
router.put('/:id', courseController.updateCourse);

// Route to delete a course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
