const router = require("express").Router();
const { Campgrounds, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const campgrounds = await Campgrounds.findAll();

    res.status(200).json(campgrounds);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const campgrounds = await Campgrounds.findByPk(req.params.id);

    if (!campgrounds) {
      res.status(404).json({
        message: "No campgrounds found with that ID!",
      });
      return;
    }
    res.status(200).json(campgrounds);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
