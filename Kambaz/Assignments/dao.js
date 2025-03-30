import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((a) => a.course === courseId);
}
export function createAssignment(a) {
  Database.assignments = [...Database.assignments, a];
  return a;
}
export function deleteAssignment(aId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((a) => a._id !== aId);
}
export function updateAssignment(aId, aUpdates) {
  const { assignments } = Database;
  const a = assignments.find((a) => a._id === aId);
  Object.assign(a, aUpdates);
  return a;
}
