// Importing the sequelize library
const { Model, DataTypes } = require("sequelize");

// The connection.js file is imported
const sequelize = require("../config/connection.js");

// The MealPlan model table extends Sequelize's Model class
class MealPlan extends Model {}
