import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    validate: {
      validator: function (str) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  phone: {
    type: String,
    //required:[true,"phone number is required"]
  },
  speciality: {
    type: String,
  },
  address: {
    type: String,
    //  address: [true,"address is required"]
  },
  city: {
    type: String,
    // required:[true,"city is required"]
  },
  password: {
    type: String,
    //   required:["password is required"]
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("User", UserSchema);
