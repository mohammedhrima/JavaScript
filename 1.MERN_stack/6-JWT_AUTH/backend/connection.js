const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

module.exports = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => {
      throw err;
    });
};
