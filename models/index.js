const User = require("./User");
const Trails = require("./Trails");
const Books = require("./Books");

User.hasMany(Trails, {
  foreignKey: "trail_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// User.hasMany(Books, {
//   foreignKey: "book_id",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

module.exports = { User, Trails, Books };
