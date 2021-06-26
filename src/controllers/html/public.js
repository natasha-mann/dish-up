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
      number: 9,
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
    const searchData = await response.json();
    const meals = searchData.results;

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

    const randomUrl = new URL("https://api.spoonacular.com/food/trivia/random");

    const randomParams = {
      apiKey: process.env.API_KEY,
    };

    randomUrl.search = new URLSearchParams(randomParams).toString();

    const randomResponse = await fetch(randomUrl, options);
    const data = await randomResponse.json();

    res.status(200).render("homepage", {
      isLoggedIn,
      day,
      meal,
      searchMeals,
      noSearchResults,
      mealsArray,
      data,
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

const renderAboutUs = (req, res) => {
  const { isLoggedIn } = req.session;
  res.render("about-us", { isLoggedIn });
};

module.exports = {
  renderLandingPage,
  renderHomePage,
  renderSearchResults,
  renderLogin,
  renderSignup,
  renderAboutUs,
};
