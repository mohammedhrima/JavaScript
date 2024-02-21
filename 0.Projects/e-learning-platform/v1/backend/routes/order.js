import express from "express";
import { getOrders } from "../controllers/order.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//GET ORDERS
router.get("/", /*verifyToken,*/ getOrders);

export default router;
