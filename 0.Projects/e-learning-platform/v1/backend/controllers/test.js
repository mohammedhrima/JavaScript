import Test from "../models/Test.js";
import TestSub from "../models/TestSub.js";

export const getAllTests = async (req, res, next) => {
  console.log("receive get all tests");
  try {
    const sort = { _id: -1 };
    const test = await Test.find().sort(sort);
    res.status(200).json(test);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getTestByid = async (req, res, next) => {
  const { id } = req.params;
  console.log("receive get test with id: ", id);

  try {
    console.log(id);
    const test = await Test.find({ _id: id });
    console.log(test);
    res.status(200).json(test);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const newTest = async (req, res, next) => {
  console.log("receive create test");

  try {
    // console.log(req.body);

    const { title, tests } = req.body;

    const test = await Test.create({
      title,
      tests
    });
    await test.save();
    res.status(200).json(test);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const deleteTest = () => {};
export const updateTest = () => {};
