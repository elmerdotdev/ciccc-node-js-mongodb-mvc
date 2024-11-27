import { Request, Response } from 'express';
import { Student } from '../models/student.model';

// Create a new student
export const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Get all students
export const getStudents = async (req: Request, res: Response): Promise<void> => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Get a single student by ID
export const getStudentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }
    res.status(200).json(student);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Update a student by ID
export const updateStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }
    res.status(200).json(student);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Delete a student by ID
export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};