import { Request, Response } from 'express';
import { Enrollment } from '../models/enrollment.model';

// Enroll a student in a course
export const enrollStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    const err = error as Error
    res.status(500).json({ error: err.message });
  }
};

// Get all enrollments
export const getEnrollments = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollments = await Enrollment.find().populate('studentId').populate('courseId');
    res.status(200).json(enrollments);
  } catch (error) {
    const err = error as Error
    res.status(500).json({ error: err.message });
  }
};

// Delete an enrollment
export const deleteEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      res.status(404).json({ message: 'Enrollment not found' });
      return;
    }
    res.status(200).json({ message: 'Enrollment deleted successfully' });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};