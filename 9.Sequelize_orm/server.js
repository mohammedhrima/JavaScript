const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const db = require("./models");
const { User } = require("./models");

app.use(express.json());
app.use(cors());

app.post("/new", async (req, res) => {
  console.log("received request");
  const { name, email } = req.body;
  const newUser = await User.create({ name: name, email: email });
  console.log("newUser created");
  res.sendStatus(200);
});

const port = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port} & Sync `);
  });
});
