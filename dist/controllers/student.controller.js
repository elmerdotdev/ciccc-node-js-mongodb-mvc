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
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getStudents = exports.createStudent = void 0;
const student_model_1 = require("../models/student.model");
// Create a new student
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.Student.create(req.body);
        res.status(201).json(student);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.createStudent = createStudent;
// Get all students
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_model_1.Student.find();
        res.status(200).json(students);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getStudents = getStudents;
// Get a single student by ID
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getStudentById = getStudentById;
// Update a student by ID
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.updateStudent = updateStudent;
// Delete a student by ID
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.Student.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.deleteStudent = deleteStudent;
