import express from "express";
import {
  createIP,
  getIP,
  getIPbyId,
  updateIP,
  deleteIP
} from "../controllers/international-programs.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//CREATE IP
router.post("/create" , verifyToken, createIP);

//GET IP
router.get("/", getIP);

//GET IP BY ID
router.get("/:id", getIPbyId);

//UPDATE IP
router.post("/update" , verifyToken, updateIP);

//DELETE IP
router.delete("/delete/:id", verifyToken, deleteIP);

export default router;
