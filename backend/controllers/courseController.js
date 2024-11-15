const courseModel = require('../models/courseModel');

const getCourses = (req, res) => {
  courseModel.getAllCourses((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const getCourseById = (req, res) => {
  const { id } = req.params;

  courseModel.getCourseById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(results[0]);
  });
};

const createCourse = (req, res) => {
  const { course_name, description, teacher_id } = req.body;

  courseModel.addCourse(
    course_name,
    description,
    teacher_id,
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        id: results.insertId,
        course_name,
        description,
      });
    }
  );
};

const updateCourse = (req, res) => {
  const { id } = req.params;
  const { course_name, description, teacher_id } = req.body;

  courseModel.updateCourse(id, course_name, description, teacher_id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Course updated successfully' });
  });
};

const deleteCourse = (req, res) => {
  const { id } = req.params;

  courseModel.deleteCourse(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
};
