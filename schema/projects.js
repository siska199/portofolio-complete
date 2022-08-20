import { Schema, SchemaTypes, model, models } from "mongoose";
import stacks from "./stacks";

const CommentSchema = new Schema({
  body: {
    type: String,
    required: [true, "Please fill comment that you want to post"],
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "users",
    required: [true, "We need to identify who send the message"],
  },
});

const LoveSchema = new Schema({
  body: {
    type: Boolean,
    required: true,
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
});

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please fill title of the project"],
    },
    name: {
      type: String,
      reqired: [true, "Please fill name app of the project"],
    },
    image: {
      type: String,
      required: [true, "Please fill image app of the project"],
    },
    logo: {
      type: String,
      required: [true, "Please fill logo app of the project"],
    },
    stacks: [
      {
        type: SchemaTypes.ObjectId,
        ref: stacks,
        required: [
          true,
          "Please choose at least one stack that you use in the project",
        ],
      },
    ],
    about: {
      type: String,
      required: [true, "Please fill about app of the project"],
    },
    linkGithub: {
      type: String,
      required: [true, "Please fill link github of the project"],
    },
    link: {
      type: String,
      required: [true, "Please fill link app of the project"],
    },
    comments: [CommentSchema],
    loves: [LoveSchema],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default models.projects || model("projects", ProjectSchema);
