const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const { beforeBulkCreate } = require("./Trails");

class User extends Model {
  checkPassword(passwordInput) {
    return bcrypt.compare(passwordInput, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
        notEmpty: true,
        /* isDecimal: true,
        isLowercase: true,
        isUppercase: true, */
      },
    },
    favoritedBooks: {
      type: DataTypes.TEXT,
      allowNull: true,
      // references: {
      //   model: "books",
      //   key: "id",
      // },
      get: function () {
        return JSON.parse(this.getDataValue("favoritedBooks"));
      },
      set: function (val) {
        return this.setDataValue("favoritedBooks", JSON.stringify(val));
        let favBooks = JSON.stringify(val);
        this.setDataValue("favoritedBooks", favBooks);
        return favBooks;
        /* User.favoritedBooks.push(this.setDataValue("favoritedBooks"));
        let favBooks = JSON.stringify(val).replace(/\\/g, "");
        return favBooks; */
        /* if (this.getDataValue('favoritedBooks') === null) {
          return this.setDataValue(JSON.stringify(val));
        } else {
          return this.setDataValue("favoritedBooks", JSON.stringify(val));
        } */
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
