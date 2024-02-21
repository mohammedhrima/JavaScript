const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "owner is required"],
    },
    course: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Course",
      requird: [true, "courses are required"],
    },
    date: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
  },
  { minimize: false }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
