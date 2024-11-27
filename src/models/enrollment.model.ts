import mongoose, { Schema, Document } from 'mongoose';

export interface IEnrollment extends Document {
  studentId: mongoose.Schema.Types.ObjectId;
  courseId: mongoose.Schema.Types.ObjectId;
  enrollmentDate: Date;
}

const EnrollmentSchema: Schema = new Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  enrollmentDate: { type: Date, required: true, default: Date.now },
});

export const Enrollment = mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);