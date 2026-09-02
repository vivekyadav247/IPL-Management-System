import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxLength: 50,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Sponsor", sponsorSchema);
