import Order from "../models/Order.js";

export const getOrders = async (req, res, next) => {
  console.log("receive get orders");

  try {
    const sort = { _id: -1 };
    const orders = await Order.find().sort(sort);
    //check them
    console.log(orders);
  } catch (err) {
    // next(err);
    res.status(400).send(err.message);
  }
};
