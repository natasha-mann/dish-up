const Day = require("./Day");
const Diet = require("./Diet");
const Intolerance = require("./Intolerance");
const Meal = require("./Meal");
const MealPlan = require("./MealPlan");
const User = require("./User");

Day.belongsTo(Meal, {
  foreignKey: "breakfast_meal_id",
});

Day.belongsTo(Meal, {
  foreignKey: "lunch_meal_id",
});

Day.belongsTo(Meal, {
  foreignKey: "dinner_meal_id",
});

Meal.hasMany(Day, {
  foreignKey: "breakfast_meal_id",
});

Meal.hasMany(Day, {
  foreignKey: "lunch_meal_id",
});

Meal.hasMany(Day, {
  foreignKey: "dinner_meal_id",
});

Day.belongsTo(MealPlan, {
  foreignKey: "meal_plan_id",
});

MealPlan.hasMany(Day, {
  foreignKey: "meal_plan_id",
});

MealPlan.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(MealPlan, {
  foreignKey: "meal_plan_id",
});

module.exports = { Day, Diet, Intolerance, Meal, MealPlan, User };
