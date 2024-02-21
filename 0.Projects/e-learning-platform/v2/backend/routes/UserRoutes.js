const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");
const Course = require("../models/Course");

//signup
router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    //if (User.findOne({ email: email })) console.log("yes");
    const user = await User.create({ firstname, lastname, email, password });
    res.status(200).json(user);
  } catch (err) {
    if (err.code == 11000) return res.status(400).send("Email already exists");
    res.status(400).send(err.message);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.logUser(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//update user
router.patch("/updateusercourse", async (req, res, next) => {
  //const { id } = req.params;
  console.log(req.body);
  const { userid, course } = req.body;
  // console.log(req.body);
  /*console.log("user id: ", id);
  console.log("course :", req.body);
  console.log("--------------------");*/
  try {
    const user = await User.findById(userid);
    user.paid = course;
    user.markModified("paid");
    await user.save();

    const order = await Order.create({
      owner: userid,
      course: course.pop(),
    });
    await order.save();

    res.status(200).json(user);

    //res.send("hey");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
