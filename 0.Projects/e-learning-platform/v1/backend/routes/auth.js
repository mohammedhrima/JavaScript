import express from "express";
import { signup, login, googleAuth } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);

//LOG IN
router.post("/login", login);

//GOOGLE AUTH
router.post("/google", googleAuth);

export default router;
