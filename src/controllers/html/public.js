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

    const firstMeal = mealsArray[0];
    const meals = mealsArray.slice(1);

    res.render("homepage", { isLoggedIn, firstMeal, meals });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSearchResults = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;

    const { day, meal, searchInput, diet, intolerance } = req.query;

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7f1744dbc1d04e0a9153423050f1d307&query=${searchInput}&number=10&addRecipeNutrition=true&diet=${diet}&intolerances=${intolerance}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  }

  const response = await fetch(url, options);
  const data = await response.json();
  const mealsArray = data.results;

  const searchMeals = mealsArray.map((each) => {
    const { id, title, image, readyInMinutes, servings } = each;

    return {
      id,
      title,
      image,
      readyInMinutes,
      servings,
    };
  });

  if (!searchMeals) {
    return res.status(404).json({ error: "No results" });
  }

  res.status(200).render("homepage", {
    isLoggedIn,
    day,
    meal,
    searchMeals,
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
