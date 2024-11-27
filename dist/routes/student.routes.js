"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("../controllers/student.controller");
const router = express_1.default.Router();
router.post('/', student_controller_1.createStudent); // Create a student
router.get('/', student_controller_1.getStudents); // Get all students
router.get('/:id', student_controller_1.getStudentById); // Get a single student by ID
router.put('/:id', student_controller_1.updateStudent); // Update a student by ID
router.delete('/:id', student_controller_1.deleteStudent); // Delete a student by ID
exports.default = router;
