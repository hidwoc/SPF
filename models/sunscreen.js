import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Sunscreen = new Schema(
  {
    name: { type: String, required: true },
    SPF: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
    applyTo: { type: String, enum: ["Face", "Body"], required: true },
    category: [{
      type: String,
      enum: [
        "Every Day",
        "Waterproof",
        "Kids",
        "Tanning",
        "Sensitive Skin",
        "Sports",
      ],
      required: true,
    }],
  },
  { timestamps: true }
);

export default mongoose.model("sunscreens", Sunscreen);
