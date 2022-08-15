import { model, Schema } from "mongoose";

const JourneySchema = new Schema(
  {
    periode: {
      type: String,
      required: [true, "Please fill periode of your journey"],
    },
    constitution: {
      type: String,
      required: [true, "Please fill constitution of your journey"],
    },
    activities: {
      type: String,
      required: [true, "Please fill activities of your journey"],
    },
    note: [String],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default model.journeys || model("journeys", JourneySchema);
