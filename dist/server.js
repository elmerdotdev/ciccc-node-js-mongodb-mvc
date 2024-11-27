"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const enrollment_routes_1 = __importDefault(require("./routes/enrollment.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DATABASE_URL; // Require env url
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/students', student_routes_1.default);
app.use('/courses', course_routes_1.default);
app.use('/enrollments', enrollment_routes_1.default);
// Connect to MongoDB and Start Server
mongoose_1.default
    .connect(MONGO_URI, { dbName: 'school' })
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error('Failed to connect to MongoDB', err));
