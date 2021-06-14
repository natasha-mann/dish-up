const sequelize = require("../config/connection");

const days = require("../seeds/days.json");
const diets = require("../seeds/diets.json");
const meals = require("../seeds/meals.json");
const mealPlans = require("../seeds/mealPlans.json");
const users = require("../seeds/users.json");
const intolerances = require("../seeds/intolerances.json");
const userIntolerances = require("../seeds/userIntolerances.json");
const userDiets = require("../seeds/userDiets.json");

const {
  Day,
  Diet,
  Intolerance,
  Meal,
  MealPlan,
  User,
  UserDiet,
  UserIntolerance,
} = require("../models");

const seed = async () => {
  await sequelize.sync({ force: true });

  await Diet.bulkCreate(diets);

  console.log("Seeded diets");

  await Intolerance.bulkCreate(intolerances);

  console.log("Seeded intolerances");

  await User.bulkCreate(users);

  console.log("Seeded users");

  await UserDiet.bulkCreate(userDiets);

  console.log("Seeded user diets");

  await UserIntolerance.bulkCreate(userIntolerances);

  console.log("Seeded user intolerances");

  await MealPlan.bulkCreate(mealPlans);

  console.log("Seeded meal plans");

  await Meal.bulkCreate(meals);

  console.log("Seeded meals");

  await Day.bulkCreate(days);

  console.log("Seeded days");

  process.exit(0);
};

seed();
