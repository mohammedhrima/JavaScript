import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import ipRoutes from "./routes/international-programs.js";
import orderRoutes from "./routes/order.js";
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/test.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/ip", ipRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/tests", testRoutes);

/*
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    /* success: false,
    status: status,
    message: message,
  });
});*/

server.listen(process.env.PORT, () => {
  connect();
  console.log("listening on port", process.env.PORT);
});

//functions

const connect = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => {
      throw err;
    });
};
