const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const goals = require("./routes/goals");
const users = require("./routes/user");
const connection = require("./connection");
//const { errorHandler } = require("./middleware/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/goals/", goals);
app.use("/api/users/", users);

//app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  connection();
  console.log("listening on PORT ", process.env.PORT || 5000);
});
