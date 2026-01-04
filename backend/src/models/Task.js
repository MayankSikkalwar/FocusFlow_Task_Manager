import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true, // Clerk userId
    },
  },
  { timestamps: true }
);

const Task= mongoose.model("Task", taskSchema);
export default Task;
