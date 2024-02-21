import mongoose from "mongoose";
const TestSubSchema = mongoose.Schema({
  files: {
    type: [String],
  },
  qtns: [
    {
      qtn: String,
      ans: Array,
      right: String,
    },
  ],
});

export default mongoose.model("TestSub", TestSubSchema);
