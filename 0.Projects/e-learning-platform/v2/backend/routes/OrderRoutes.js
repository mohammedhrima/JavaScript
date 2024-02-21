const router = require("express").Router();
const Order = require("../models/Order");
const User = require("../models/User");

//get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("owner", ["firstname", "lastname"])
      .populate("course", ["fulltitle"]);
    res.status(200).json(orders);
  } catch (err) {
    res.status(200).send(err.message);
  }
});

module.exports = router;
