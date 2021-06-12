const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Meal extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  spoonacular_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ready_in_minutes: {
    type: DataTypes.INTEGER,
  },
  servings: {
    type: DataTypes.INTEGER,
  },
  calories: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
};

const options = {
  sequelize,
  modelName: "meal",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

Meal.init(schema, options);

module.exports = Meal;
