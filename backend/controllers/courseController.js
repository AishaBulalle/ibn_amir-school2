const courseModel = require('../models/courseModel');

// Controller to get all courses
const getCourses = (req, res) => {
  courseModel.getAllCourses((err, results) => {
    if (err) return res.status(500).json({ error: err.message }); // Handle errors if any
    res.json(results); // Send the list of courses as a response
  });
};

// Controller to get a course by its ID
const getCourseById = (req, res) => {
  const { id } = req.params; // Access course ID from request params

  courseModel.getCourseById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message }); // Handle errors if any
    if (results.length === 0) {
      return res.status(404).json({ message: 'Course not found' }); // Return 404 if no course found
    }
    res.json(results[0]); // Return the course details
  });
};

// Controller to create a new course
const createCourse = (req, res) => {
  const { course_name, description, teacher_id } = req.body; // Extract data from request body

  courseModel.addCourse(
    course_name,
    description,
    teacher_id,
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message }); // Handle errors if any
      res.status(201).json({
        id: results.insertId, // Return the ID of the newly created course
        course_name,
        description,
      });
    }
  );
};

// Controller to update an existing course
const updateCourse = (req, res) => {
  const { id } = req.params; // Access course ID from request params
  const { course_name, description, teacher_id } = req.body; // Extract updated data from request body

  courseModel.updateCourse(id, course_name, description, teacher_id, (err) => {
    if (err) return res.status(500).json({ error: err.message }); // Handle errors if any
    res.status(200).json({ message: 'Course updated successfully' }); // Return success message
  });
};

// Controller to delete a course
const deleteCourse = (req, res) => {
  const { id } = req.params; // Access course ID from request params

  courseModel.deleteCourse(id, (err) => {
    if (err) return res.status(500).json({ error: err.message }); // Handle errors if any
    res.status(204).send(); // No content after successful deletion
  });
};

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
};
