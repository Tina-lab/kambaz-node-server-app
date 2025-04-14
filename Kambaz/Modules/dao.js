import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createModule(module) {
  const newModule = { ...module, _id: uuidv4() };
  return model.create(newModule);
  // Database.modules = [...Database.modules, newModule];
  // return newModule;
}

export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
export function updateModule(moduleId, moduleUpdates) {
  const { modules } = Database;
  const module = modules.find((module) => module._id === moduleId);
  Object.assign(module, moduleUpdates);
  return module;
}
