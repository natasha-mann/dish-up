const { Meal } = require("../../models");

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

    console.log(firstMeal, meals);

    res.render("homepage", { isLoggedIn, firstMeal, meals });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSearchResults = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;

    const searchMeals = [
      {
        id: 637876,
        image: "https://spoonacular.com/recipeImages/637876-312x231.jpg",
        readyInMinutes: 45,
        servings: 6,
        title: "Chicken 65",
      },
      {
        id: 637876,
        image: "https://spoonacular.com/recipeImages/637876-312x231.jpg",
        readyInMinutes: 45,
        servings: 6,
        title: "Chicken 65",
      },
      {
        id: 637876,
        image: "https://spoonacular.com/recipeImages/637876-312x231.jpg",
        readyInMinutes: 45,
        servings: 6,
        title: "Chicken 65",
      },
      {
        id: 637876,
        image: "https://spoonacular.com/recipeImages/637876-312x231.jpg",
        readyInMinutes: 45,
        servings: 6,
        title: "Chicken 65",
      },
    ];

    res.render("homepage", { isLoggedIn, searchMeals });
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
