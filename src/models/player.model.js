import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxLength: 50,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"],
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Player", playerSchema);
