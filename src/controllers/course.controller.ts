import { Request, Response } from 'express';
import { Course } from '../models/course.model';

// Create a new course
export const createCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Get all courses
export const getCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Get a single course by ID
export const getCourseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Update a course by ID
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};