const User = require("./User");
const Campgrounds = require("./Campgrounds");
const Books = require("./Books");

// User.hasMany(Campgrounds, {
//   foreignKey: "trail_id",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// User.hasMany(Books, {
//   foreignKey: "book_id",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

module.exports = { User, Campgrounds, Books };
