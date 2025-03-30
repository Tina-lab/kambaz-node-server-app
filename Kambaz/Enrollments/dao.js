import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createEnrollment(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
export function deleteEnrollment(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => e.course !== courseId || e.user !== userId
  );
}
export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const enrolls = enrollments.filter((e) => e.user === userId);
  return enrolls;
}
