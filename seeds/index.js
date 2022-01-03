const seedBooks = require("./book-seeds");
const seedUsers = require("./users-seeds");
const seedCampgrounds = require("./campgrounds-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\nDATABASE SYNCED!!\n");
  await seedBooks();
  console.log("\nBOOKS SEEDED!!\n");
  await seedUsers();
  console.log("\nUSERS SEEDED!!\n");
  await seedCampgrounds();
  console.log("\nCAMPGROUNDS SEEDED!!\n");

  process.exit(0);
};

seedAll();
