import express from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../controllers/course.controller';

const router = express.Router();

router.post('/', createCourse);          // Create a course
router.get('/', getCourses);             // Get all courses
router.get('/:id', getCourseById);       // Get a single course by ID
router.put('/:id', updateCourse);        // Update a course by ID
router.delete('/:id', deleteCourse);     // Delete a course by ID

export default router;