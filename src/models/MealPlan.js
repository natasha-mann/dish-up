// Importing the sequelize library
const { Model, DataTypes } = require("sequelize");

// The connection.js file is imported
const sequelize = require("../config/connection.js");

// The MealPlan model table extends Sequelize's Model class
class MealPlan extends Model {}

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
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(30),
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "mealPlan",
};

MealPlan.init(schema, options);

module.exports = MealPlan;
