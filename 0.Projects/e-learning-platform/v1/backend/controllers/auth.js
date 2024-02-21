import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  console.log(req.body);
  console.log("receive sign up");
  try {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json({ msg: "user created succefully", user: newUser });
  } catch (err) {
    if (err.code == 11000) res.status(400).send("user already exists"); //return createError(400, "Email already exists");
    res.status(400).send(err.message);
    //next(err);
  }
};

export const login = async (req, res, next) => {
  console.log("receive log in");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User not found");
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong password");
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token: token });
    /*
      .cookie("access_token", token, {
        httpOnly: true,
      }) */
  } catch (err) {
    //next(err);
    res.status(400).send(err.message);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser);
    }
  } catch (err) {
    //next(err);
    res.status(400).send(err.message);
  }
};
