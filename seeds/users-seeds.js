const { User } = require("../models");

const userSeedData = [
  {
    username: "aaron002",
    email: "aaron002@email.com",
    password: "passNotHashed",
    // favoritedBooks: [],
  },
];

const seedUsers = () => User.bulkCreate(userSeedData);

module.exports = seedUsers;
