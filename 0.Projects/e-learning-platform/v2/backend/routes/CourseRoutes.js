const router = require("express").Router();
const Course = require("../models/Course");

router.post("/create", async (req, res) => {
  const { fulltitle, description, videos, price } = req.body;
  try {
    const course = await Course.create({
      fulltitle,
      description,
      videos,
      price,
    });
    res.status(200).json(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id/videos", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const sort = { _id: -1 };
    const courses = await Course.find().sort(sort);
    res.status(200).json(courses);
  } catch (err) {
    res.status(200).send(err.message);
  }
});

router.post("/updatecourse", async (req, res) => {
  const { fulltitle, description, videos, price, id } = req.body;
  console.log(req.body);
  console.log("------------------");
  try {
    const course = await Course.findById(id);
    console.log(course);
    course.fulltitle = fulltitle;
    course.description = description;
    course.videos = videos;
    course.price = parseInt(price);
    /*course.markModified("price");*/
    await course.save();
    res.status(200).json(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
