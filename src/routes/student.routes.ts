import express from 'express';
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from '../controllers/student.controller';

const router = express.Router();

router.post('/', createStudent);         // Create a student
router.get('/', getStudents);            // Get all students
router.get('/:id', getStudentById);      // Get a single student by ID
router.put('/:id', updateStudent);       // Update a student by ID
router.delete('/:id', deleteStudent);    // Delete a student by ID

export default router;