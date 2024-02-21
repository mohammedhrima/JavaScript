import mongoose from "mongoose";
const IP_Schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  detais: {
    type: String,
    default: "",
  },
  duration: {
    type: String,
    required: [true, "duration is required"],
  },
  location: {
    type: String,
    required: [true, "location required"],
  },
  startDate: {
    type: String,
    required: [true, "start Date required"],
  },
});

export default mongoose.model("IP", IP_Schema);
