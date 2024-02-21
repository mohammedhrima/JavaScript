const mongoose = require("mongoose");
const IdiomSchema = mongoose.Schema(
  {
    idiom: {
      type: String,
      required: [true, "Add idom please"],
      unique: [true, "Idiom already exists"],
    },
  },
  { minimize: false }
);

const Idiom = mongoose.model("Idiom", IdiomSchema);
module.exports = Idiom;
