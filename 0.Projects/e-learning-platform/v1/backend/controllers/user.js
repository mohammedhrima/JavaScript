import User from "../models/User.js";
import Order from "../models/Order.js";

export const updateUser = async (req, res, next) => {
  console.log("receive update user");

  try {
    const {
      name,
      email,
      phone,
      speciality,
      address,
      city,
      password,
      _id
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          name: name !== "" && name,
          email: email !== "" && email,
          phone: phone !== "" && phone,
          speciality: speciality !== "" && speciality,
          address: address !== "" && address,
          city: city !== "" && city,
          password: password !== "" && password
        }
      },
      {
        new: true
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    //next(err);
    res.status(400).send(err.message);
  }
};

export const addIP = async (req, res, next) => {
  console.log("receive add international program");

  try {
    const { user_id, ip_id } = req.body;
    const newUser = await User.findByIdAndUpdate(user_id, {
      $set: {
        paid: [...newUser.paid, ip_id]
      }
    });

    const order = new Order({
      user: user_id,
      type: "International Program",
      order: ip_id
    });
    order.save();
  } catch (err) {
    // next(err);
    res.status(400).send(err.message);
  }
};
