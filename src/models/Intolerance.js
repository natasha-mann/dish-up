const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Intolerance extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  modelName: "intolerance",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

Intolerance.init(schema, options);

module.exports = Intolerance;
