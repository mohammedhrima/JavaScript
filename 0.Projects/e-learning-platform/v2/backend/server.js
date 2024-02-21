const express = require("express");
require("dotenv").config();
require("./connection");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const userRoutes = require("./routes/UserRoutes");
const courseRoutes = require("./routes/CourseRoutes");
const idiomRoutes = require("./routes/IdiomRoutes");
const orderRoutes = require("./routes/OrderRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
app.use("/idioms", idiomRoutes);
app.use("/orders", orderRoutes);

//payment
app.post("/create-payment", async (req, res, next) => {
  const { amount } = req.body;
  console.log(amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "mad",
      payment_method_types: ["card"],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
});

server.listen(8000, () => console.log("listening on port 8000"));
