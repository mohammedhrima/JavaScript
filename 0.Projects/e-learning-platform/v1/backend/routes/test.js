import express from "express";
import { verifyToken } from "../verifyToken.js";
import { getAllTests, getTestByid, newTest } from "../controllers/test.js";

const router = express.Router();

router.post("/new-test", verifyToken, newTest);
router.get("/", getAllTests);
router.get("/:id", getTestByid);

export default router;
