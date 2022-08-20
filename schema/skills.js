import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, "Fill name of skill"],
  },
  level: {
    type: String,
    required: [true, "Fill level of your skill"],
    enum: {
      values: ["basic", "intermediet", "advance"],
      message: "{VALUE} is not supported",
    },
  },
  type: {
    type: String,
    enum: {
      values: ["frontend", "backend"],
      message: "{VALUE} is not supported",
    },
    required: [true, "File type of your skill"],
  },
});

export default models.skills || model("skills", SkillSchema);
