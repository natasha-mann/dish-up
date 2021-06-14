const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserDiet extends Model {}

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

  diet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "diet",
      key: "id",
    },
    onDelete: "cascade",
    onUpdate: "cascade",
  },
};

const options = {
  sequelize,
  modelName: "userDiet",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

UserDiet.init(schema, options);

module.exports = UserDiet;
