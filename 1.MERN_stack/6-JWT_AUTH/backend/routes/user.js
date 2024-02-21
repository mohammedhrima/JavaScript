const express = require("express");
const router = express.Router();
const { getUser, login, signup } = require("../controllers/user");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, getUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
