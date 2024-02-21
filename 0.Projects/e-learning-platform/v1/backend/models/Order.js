import mongoose from "mongoose";
const OrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "owner is required"],
    },
    type: {
      type: String,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      requird: [true, "courses are required"],
    },
  },
  { minimize: false }
);

export default mongoose.model("Order", OrderSchema);
