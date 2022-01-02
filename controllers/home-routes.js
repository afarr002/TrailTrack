const router = require("express").Router();
const { Books, Campgrounds } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedin) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/books", async (req, res) => {
  try {
    const dbBooksData = await Books.findAll();

    const books = dbBooksData.map((books) => books.get({ plain: true }));
    res.render("book", {
      books,
      // loggedin: req.sessions.loggedin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/campgrounds", async (req, res) => {
  try {
    const dbCampgroundData = await Campgrounds.findAll();

    const campgrounds = dbCampgroundData.map((campgrounds) => {
      campgrounds.get({ plain: true });
    });
    res.render("campgrounds", {
      campgrounds,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
