const router = require("express").Router();
const { Books } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const books = await Books.findAll();

    res
      .render("books", {
        books,
        loggedIn: req.session.loggedIn,
      })
      .status(200)
      .json(books);
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
