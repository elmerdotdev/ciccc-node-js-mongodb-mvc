import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.routes';
import courseRoutes from './routes/course.routes';
import enrollmentRoutes from './routes/enrollment.routes';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DATABASE_URL!; // Require env url

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

// Connect to MongoDB and Start Server
mongoose
  .connect(MONGO_URI, { dbName: 'school' })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));