// src/types/Enrollment.ts
export interface Enrollment {
  id?: number; // Optional because it will be auto-generated for new enrollments
  studentId: number;
  courseId: number;
}
