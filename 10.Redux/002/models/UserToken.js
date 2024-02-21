import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userToken = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "user id is required"],
  },
  token: {
    type: String,
    required: [true, "token is required"],
  },
});

export default mongoose.model("usertToken", userToken);
