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
exports.deleteEnrollment = exports.getEnrollments = exports.enrollStudent = void 0;
const enrollment_model_1 = require("../models/enrollment.model");
// Enroll a student in a course
const enrollStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollment = yield enrollment_model_1.Enrollment.create(req.body);
        res.status(201).json(enrollment);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.enrollStudent = enrollStudent;
// Get all enrollments
const getEnrollments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollments = yield enrollment_model_1.Enrollment.find().populate('studentId').populate('courseId');
        res.status(200).json(enrollments);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getEnrollments = getEnrollments;
// Delete an enrollment
const deleteEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollment = yield enrollment_model_1.Enrollment.findByIdAndDelete(req.params.id);
        if (!enrollment) {
            res.status(404).json({ message: 'Enrollment not found' });
            return;
        }
        res.status(200).json({ message: 'Enrollment deleted successfully' });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.deleteEnrollment = deleteEnrollment;
