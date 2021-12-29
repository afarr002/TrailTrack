const router = require("express").Router();
const { User, Books } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      favoritedBooks: "[]",
    });

    // if (!isDecimal) {
    //   throw new Error("This is not a decimal");
    // }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/favBooks", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { id: req.params.id },
    });

    console.log("******", dbUserData, req.body);

    await User.update(
      {
        favoritedBooks: [dbUserData.favoritedBooks, req.body.bookId],
      },
      { where: { id: req.params.id } }
    );

    res.status(200).json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({
        message: "Wrong email or password, please try again!",
      });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Wrong email or password, please try again!",
      });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({
        user: dbUserData,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
