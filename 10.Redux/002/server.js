import express from "express";
import { config } from "dotenv";
import { cors } from "cors";
import mongoose from "mongoose";

const app = express();
config();

app.use(express.json());
app.use(cors());


const connection = ()=>{
	mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => {
      throw err;
    });
}

connection();

app.listen(process.env.PORT, () => {
  console.log("listening on PORT ", process.env.PORT);
});
