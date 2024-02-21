import express from "express";
import { updateUser, addIP } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update info
router.post("/update", verifyToken, updateUser);

//get course
router.post("/addip", verifyToken, addIP);

export default router;
