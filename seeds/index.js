const seedBooks = require("./book-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\nDATABASE SYNCED!!\n");
  await seedBooks();
  console.log("\nBOOKS SEEDED!!\n");

  process.exit(0);
};

seedAll();
