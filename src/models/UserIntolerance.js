const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserIntolerance extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "cascade",
    onUpdate: "cascade",
  },
  intolerance_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "intolerance",
      key: "id",
    },
    onDelete: "cascade",
    onUpdate: "cascade",
  },
};

const options = {
  sequelize,
  modelName: "userIntolerance",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

UserIntolerance.init(schema, options);

module.exports = UserIntolerance;
