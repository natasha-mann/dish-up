const sequelize = require("../config/connection");

const days = require("../seeds/days.json");
const diets = require("../seeds/diets.json");
const meals = require("../seeds/meals.json");
const mealPlans = require("../seeds/mealPlans.json");
const users = require("../seeds/users.json");
const intolerances = require("../seeds/intolerances.json");

const Day = require("../models/Day");
const Diet = require("../models/Diet");
const Meal = require("../models/Meal");
const MealPlan = require("../models/MealPlan");
const User = require("../models/User");
const Intolerance = require("../models/Intolerance");

const seed = async () => {
  await sequelize.sync({ force: true });

  await Diet.bulkCreate(diets);

  console.log("Seeded diets");

  await Intolerance.bulkCreate(intolerances);

  console.log("Seeded intolerances");

  await User.bulkCreate(users);

  console.log("Seeded users");

  await MealPlan.bulkCreate(mealPlans);

  console.log("Seeded meal plans");

  await Meal.bulkCreate(meals);

  console.log("Seeded meals");

  await Day.bulkCreate(days);

  console.log("Seeded days");

  process.exit(0);
};

seed();
