import express from 'express';
import { enrollStudent, getEnrollments, deleteEnrollment } from '../controllers/enrollment.controller';

const router = express.Router();

router.post('/', enrollStudent);  // Enroll a student in a course
router.get('/', getEnrollments); // Get all enrollments
router.delete('/:id', deleteEnrollment); // Delete an enrollment

export default router;