import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxLength: 50,
    },
    company: {
      type: String,
      required: [true, "Company is required"],
      minlength: 3,
      maxLength: 50,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Owner", ownerSchema);
