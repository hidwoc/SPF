import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Sunscreen = new Schema(
  {
    name: { type: String, required: true },
    SPF: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
    applyTo: { type: String, enum: ["face", "body"], required: true },
    category: {
      type: Array,
      enum: [
        "every day",
        "waterproof",
        "kids",
        "tanning",
        "sensitive skin",
        "sports",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("sunscreens", Sunscreen);
