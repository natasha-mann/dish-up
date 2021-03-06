// Importing the sequelize library
const { Model, DataTypes } = require("sequelize");

// The connection.js file is imported
const sequelize = require("../config/connection.js");

// The Day model table extends Sequelize's Model class
class Day extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isNumeric: true,
    },
  },
  name: {
    type: DataTypes.ENUM({
      values: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
    }),
    allowNull: false,
  },
  meal_plan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "mealPlan",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  breakfast_meal_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "meal",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  lunch_meal_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "meal",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  dinner_meal_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "meal",
      key: "id",
    },
    onDelete: "CASCADE",
  },
};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "day",
};

Day.init(schema, options);

module.exports = Day;
