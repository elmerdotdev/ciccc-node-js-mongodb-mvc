"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enrollment_controller_1 = require("../controllers/enrollment.controller");
const router = express_1.default.Router();
router.post('/', enrollment_controller_1.enrollStudent); // Enroll a student in a course
router.get('/', enrollment_controller_1.getEnrollments); // Get all enrollments
router.delete('/:id', enrollment_controller_1.deleteEnrollment); // Delete an enrollment
exports.default = router;
