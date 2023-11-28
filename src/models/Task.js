import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Task collection does not exist create a new one.
export default mongoose.models.Task || mongoose.model("Task", taskSchema);
