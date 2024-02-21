import IP from "../models/International-programs.js";

export const createIP = async (req, res) => {
  console.log("create IP", req.body);

  try {
    const newIP = new IP({
      ...req.body
    });
    newIP.save();
    res.status(200).send("Program created succefully");
  } catch (err) {
    // next(err);
    res.status(400).send(err.message);
  }
};

export const getIP = async (req, res) => {
  console.log("receive get International programs");
  try {
    const sort = { _id: -1 };
    const ips = await IP.find().sort(sort);
    res.status(200).json(ips);
  } catch (err) {
    //  next(err);
    res.status(400).send(err.message);
  }
};

export const getIPbyId = async (req, res) => {
  const { id } = req.params;
  console.log("receive get International prgram by id ", id);
  try {
    const ip = await IP.findById(id);
    res.status(200).json(ip);
  } catch (err) {
    // next(err);
    res.status(400).send(err.message);
  }
};

export const updateIP = async (req, res, next) => {
  console.log("receive update Internationl programs");
  try {
    const updatedIP = await IP.findByIdAndUpdate(
      req.body._id,
      {
        $set: req.body
      },
      {
        new: true
      }
    );
    res.status(200).json(updatedIP);
  } catch (err) {
    //next(err);
    res.status(400).send(err.message);
  }
};

export const deleteIP = async (req, res, next) => {
  try {
    await IP.findByIdAndDelete(req.params._id);
    res.status(200).save("International program has been deleted");
  } catch (err) {
    //next(err);
    res.status(400).send(err.message);
  }
};
