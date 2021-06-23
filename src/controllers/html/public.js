require("dotenv").config();

const { Meal } = require("../../models");
const fetch = require("node-fetch");

const renderLandingPage = (req, res) => {
  try {
    const { isLoggedIn } = req.session;

    res.render("landing-page", { isLoggedIn });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderHomePage = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const mealData = await Meal.findAll();
    const mealsArray = mealData.map((meal) => {
      return meal.get({ plain: true });
    });

    const url = new URL("https://api.spoonacular.com/food/trivia/random");

    const params = {
      apiKey: process.env.API_KEY,
    };

    url.search = new URLSearchParams(params).toString();

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.render("homepage", { isLoggedIn, mealsArray, data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSearchResults = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;

    const { day, meal, searchInput, diet, intolerance } = req.query;

    const mealData = await Meal.findAll();
    const mealsArray = mealData.map((meal) => {
      return meal.get({ plain: true });
    });

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const params = {
      apiKey: process.env.API_KEY,
      query: searchInput,
      number: 2,
      addRecipeNutrition: true,
      diet: diet,
      intolerances: intolerance,
    };

    url.search = new URLSearchParams(params).toString();

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const meals = data.results;

    const searchMeals = meals.map((each) => {
      const { id, title, image, readyInMinutes, servings } = each;

      return {
        id,
        title,
        image,
        readyInMinutes,
        servings,
      };
    });

    const noSearchResults = searchMeals.length === 0;

    res.status(200).render("homepage", {
      isLoggedIn,
      day,
      meal,
      searchMeals,
      noSearchResults,
      mealsArray,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderLogin = (req, res) => {
  res.render("login", { layout: "login" });
};

const renderSignup = (req, res) => {
  res.render("signup", { layout: "signup" });
};

module.exports = {
  renderLandingPage,
  renderHomePage,
  renderSearchResults,
  renderLogin,
  renderSignup,
};
