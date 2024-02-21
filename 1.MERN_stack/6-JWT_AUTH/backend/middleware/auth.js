const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = asyncHandler(async (req, res, next) => {
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // console.log("verify");
      let token = req.headers.authorization.split(" ")[1];
      //console.log("token -> ", token);
      const decoded = jwt.verify(token, process.env.JWT);
      //console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password"); //- to remove password
      next();
    } catch (err) {
      res.status(400).send("You are not authorized");
    }
  } else {
    res.status(400).send("You are not authorized");
  }
});

module.exports = verifyToken;
