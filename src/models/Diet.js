const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Diet extends Model {}

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

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const options = {
  sequelize,
  modelName: "diet",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

Diet.init(schema, options);

module.exports = Diet;
