import mongoose from "mongoose";
const TestSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"]
  },
  tests: {
    type: [Object]
  }
});

export default mongoose.model("Test", TestSchema);
