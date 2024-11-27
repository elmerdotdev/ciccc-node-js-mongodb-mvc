"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("../controllers/course.controller");
const router = express_1.default.Router();
router.post('/', course_controller_1.createCourse); // Create a course
router.get('/', course_controller_1.getCourses); // Get all courses
router.get('/:id', course_controller_1.getCourseById); // Get a single course by ID
router.put('/:id', course_controller_1.updateCourse); // Update a course by ID
router.delete('/:id', course_controller_1.deleteCourse); // Delete a course by ID
exports.default = router;
