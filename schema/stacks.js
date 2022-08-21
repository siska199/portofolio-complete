import { models, model, Schema } from "mongoose";

const StackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please fill name of the stack"],
    },
    type: {
      name: {
        type: String,
        required: [true, "Please fill name of type stacks"],
      },
      identity: {
        type: Number,
      },
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

StackSchema.path("name").validate(async (name) => {
  const dataExist = await model("stacks").find({ name: name });
  if (dataExist.length > 0) return false;
  return true;
}, "This field has been existed");

StackSchema.pre("save", function (next) {
  if (!this.isModified("type")) return next();

  const name = this.type.name.toLowerCase();

  switch (name) {
    case "framework fullstack":
      this.type.identity = 1;
      break;
    case "framework frontend":
      this.type.identity = 2;
      break;
    case "framework css":
      this.type.identity = 3;
      break;
    case "state management":
      this.type.identity = 4;
      break;
    case "framework backend":
      this.type.identity = 5;
      break;
    case "database":
      this.type.identity = 6;
      break;
    case "query language":
      this.type.identity = 7;
      break;
    case "cms":
      this.type.identity = 8;
      break;
    default:
      this.type.identity = 10;
      break;
  }

  return next();
});

export default models.stacks || model("stacks", StackSchema);
