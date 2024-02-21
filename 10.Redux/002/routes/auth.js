import { Router } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const router = Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
	const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(req.body.password, salt);
	const newUser = new User({ ...req.body, password: hash });
	await newUser.save();
	res.status(200).json({ msg: "user created succefully", user: newUser });
  } catch (err) {
    if (err.code == 11000) res.status(400).send("user already exists");
    res.status(400).send(err.message);
  }
});
