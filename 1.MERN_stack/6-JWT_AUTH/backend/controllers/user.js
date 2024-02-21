const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

const signup = asyncHandler(async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(7);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const Newuser = await User.create({
      ...req.body,
      password: hash,
    });
    await Newuser.save();
    const { email, name } = Newuser;
    res.status(200).json({ name, email, token: GenerateToken(Newuser._id) });
  } catch (err) {
    if (err.code === 11000) res.status(400).send("user already exists");
    else res.status(400).send(err.message);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");
    const isCorrect = await bcrypt.compareSync(password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong password");

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: GenerateToken(user._id),
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

const GenerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT);
};

module.exports = { getUser, signup, login };
