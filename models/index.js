const User = require("./User");
const Trails = require("./Trails");
const Books = require("./Books");

User.hasMany(Trails, {
  foreignKey: "trail_id",
});

User.hasMany(Books, {
  foreignKey: "book_id",
});

module.exports = { User, Trail };
