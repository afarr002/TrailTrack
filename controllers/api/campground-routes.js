const router = require("express").Router();
const { Campgrounds, User } = require("../../models");
const { getCampground, futureWeather } = require("../../api-fetch");
const npsApiKey = "oSfzNz3dTkFvHFrco2C2sYljO4uhXBaTYHwx7kib";
const userStateSelection =
  "CO"; /* document.querySelector("#userStateSelection"); */

// router.get("/", async (req, res) => {
//   try {
//     const campground = await getCampground(userStateSelection);
//     res.status(200).json(campground);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post("/", async (req, res) => {
  const getCampApiUrl = `https://developer.nps.gov/api/v1/campgrounds?stateCode=${userStateSelection}&api_key=${npsApiKey}`;

  fetch(getCampApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      console.log(info);

      res.render("campgrounds", { info });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
