const router = require("express").Router();

const userRoutes = require("./user-routes");
const bookRoutes = require("./book-routes");
const campgroundRoutes = require("./campground-routes");

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/campgrounds", campgroundRoutes);

module.exports = router;
