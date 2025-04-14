import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: String,
    availableFrom: String,
    availableUntil: String,
    due: String,
    points: Number,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
