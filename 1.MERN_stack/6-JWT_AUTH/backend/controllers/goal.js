const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal");
const User = require("../models/user");

const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals });
});

const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  try {
    const goal = await Goal.create({ name });
    await goal.save();
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (Goal.user.toString() !== user.id) {
      return res.status(401).send("User not authorized");
    }
    const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true }); //new create it if doesn't exists
    if (!goal) return Error("not found");
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (Goal.user.toString() !== user.id) {
      return res.status(401).send("User not authorized");
    }
    Goal.findByIdAndDelete(id);
    res.status(200).send("goal deleted succefully");
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
