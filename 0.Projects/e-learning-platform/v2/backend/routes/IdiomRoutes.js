const router = require("express").Router();
const Idiom = require("../models/Idiom");

router.post("/create", async (req, res) => {
  console.log(req.body);
  const { newIdiom } = req.body;
  try {
    const idiom = await Idiom.create({ idiom: newIdiom });
    res.status(200).json(idiom);
  } catch (err) {
    if (err.code == 11000) return res.status(400).send("Idioms already exists");
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const sort = { _id: -1 };
    const idioms = await Idiom.find().sort(sort).populate("idiom");

    res.status(200).json(idioms);
  } catch (err) {
    res.status(200).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Idiom.findByIdAndDelete(id);
    // await idiom.save();
    // res.status(200).json(idiom);
    const sort = { _id: -1 };
    const idioms = await Idiom.find().sort(sort).populate("idiom");

    res.status(200).json(idioms);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
