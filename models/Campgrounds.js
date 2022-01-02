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
    campground_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
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
