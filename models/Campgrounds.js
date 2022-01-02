const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campgrounds extends Model {}

Campgrounds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    campground_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    campground_lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    campground_lon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fees: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Campgrounds",
  }
);

module.exports = Campgrounds;
