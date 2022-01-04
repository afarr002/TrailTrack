const router = require("express").Router();
const { Books, Campgrounds } = require("../models");

router.get("/home", (req, res) => {
  res.render("landing");
});

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/login", (req, res) => {
  if (req.session.loggedin) {
    res.redirect("/home");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedin) {
    res.redirect("/home");
    return;
  }
  res.render("signup");
});

module.exports = router;
