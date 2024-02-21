require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, { useNewUrlparser: true })
  .then(() => console.log("connect to Database"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
