const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Plan extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  meal_plan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "mealPlan",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  modelName: "plan",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

Plan.init(schema, options);

module.exports = Plan;
