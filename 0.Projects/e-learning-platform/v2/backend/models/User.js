const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "name is required"],
    },
    lastname: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "emiail already exists"],
      validate: {
        validator: function (str) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      required: [true, "password required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Array,
      default: [],
    },
  },
  { minimize: false }
);

//before saving hash password
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//when log in check if email nd password are right
UserSchema.statics.logUser = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("invalid email");
  const isSamePassword = bcrypt.compareSync(password, user.password);
  if (isSamePassword) return user;
  throw new Error("Invalid password");
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
