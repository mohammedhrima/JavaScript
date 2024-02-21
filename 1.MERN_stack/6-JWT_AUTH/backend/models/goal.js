const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "id is required"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "finahuwa name"],
      unique: [true, "rah deja kayn"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
