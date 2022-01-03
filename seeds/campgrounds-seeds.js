const { Campgrounds } = require("../models");
const campgroundDbInfo = require("../api-fetch");

const seedCampgrounds = () => Campgrounds.bulkCreate(campgroundDbInfo);

module.exports = seedCampgrounds;
