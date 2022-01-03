const router = require("express").Router();
const { Books } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const /* dbCampgroundData */ books = await Books.findAll();

    // const books = dbCampgroundData.map((books) => {
    //   books.get({ plain: true });
    // });
    res.render("books", {
      books,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const books = await Books.findByPk(req.params.id);

    if (!books) {
      res.status(404).json({
        message: "No books found with that ID!",
      });
      return;
    }
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
