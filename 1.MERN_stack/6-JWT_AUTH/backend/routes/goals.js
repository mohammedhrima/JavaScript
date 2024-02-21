const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, getGoal);

router.post("/", verifyToken, setGoal);

router.put("/:id", verifyToken, updateGoal);

router.delete("/:id", verifyToken, deleteGoal);

module.exports = router;
