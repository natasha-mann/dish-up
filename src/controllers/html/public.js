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
    const meals = mealData.map((meal) => {
      return meal.get({ plain: true });
    });

    res.render("homepage", { isLoggedIn, meals });
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
  renderLogin,
  renderSignup,
};
