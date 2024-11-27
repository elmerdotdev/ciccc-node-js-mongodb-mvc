"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getCourses = exports.createCourse = void 0;
const course_model_1 = require("../models/course.model");
// Create a new course
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.Course.create(req.body);
        res.status(201).json(course);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.createCourse = createCourse;
// Get all courses
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_model_1.Course.find();
        res.status(200).json(courses);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getCourses = getCourses;
// Get a single course by ID
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.Course.findById(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getCourseById = getCourseById;
// Update a course by ID
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.updateCourse = updateCourse;
// Delete a course by ID
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.Course.findByIdAndDelete(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.deleteCourse = deleteCourse;
