const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "diet",
      key: "id",
    },
  },
  intolerances_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "intolerance",
      key: "id",
    },
  },
  daily_calories: {
    type: DataTypes.INTEGER,
  },
};

const options = {
  sequelize,
  modelName: "user",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
