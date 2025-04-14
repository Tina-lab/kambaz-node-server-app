import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createAssignment(a) {
  const newAssignments = { ...a, _id: uuidv4() };
  return model.create(newAssignments);
}
export function deleteAssignment(aId) {
  return model.deleteOne({ _id: aId });
}
export function updateAssignment(aId, aUpdates) {
  return model.updateOne({ _id: aId }, aUpdates);
}
