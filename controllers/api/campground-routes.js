const router = require("express").Router();
const { Campgrounds, User } = require("../../models");
const { getCampground, futureWeather } = require("../../api-fetch");
const userStateSelection =
  "CO"; /* document.querySelector("#userStateSelection"); */

router.get("/", async (req, res) => {
  try {
    const campground = await getCampground(userStateSelection);
    res.status(200).json(campground);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
