const { MealPlan, Day, Meal } = require("../../models");
const fetch = require("node-fetch");

const renderDashboard = async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.session;

    const mealPlanData = await MealPlan.findAll({ where: { user_id: userId } });

    const mealPlans = mealPlanData.map((mealPlan) =>
      mealPlan.get({ plain: true })
    );

    return res.render("dashboard", {
      layout: "dashboard",
      firstName,
      lastName,
      mealPlans,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

const renderMealPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const mealPlanData = await MealPlan.findByPk(id, {
      include: {
        model: Day,
        include: [
          { model: Meal, as: "breakfast" },
          { model: Meal, as: "lunch" },
          { model: Meal, as: "dinner" },
        ],
      },
    });

    const mealPlan = mealPlanData.get({ plain: true });

    if (!mealPlan) {
      return res.status(404).json({ error: "Meal plan does not exist" });
    }

    res.status(200).render("mealPlan", { layout: "dashboard", mealPlan });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to render meal plan." });
  }
};

const renderAddMeal = (req, res) => {
  try {
    const { id: mealPlanId } = req.params;
    const { day, meal } = req.query;

    const { searchInput, diet, intolerance } = req.body;

    res
      .status(200)
      .render("addMeal", { layout: "dashboard", day, meal, mealPlanId });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to render add meal plan." });
  }
};

const renderSearchResults = async (req, res) => {
  const { id: mealPlanId } = req.params;

  const { day, meal } = req.query;

  const method = "GET";
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=afcf068a6e5d4679a7bf651d36da89ce&query=salmon,tomatoes&number=5&addRecipeNutrition=true";
  const headers = {
    // apiKey: "afcf068a6e5d4679a7bf651d36da89ce",
    "Content-Type": "application/json",
  };

  const response = await fetch(url, headers, method);
  const data = await response.json();
  const mealsArray = data.results;

  const meals = mealsArray.map((each) => {
    const { id, title, image, readyInMinutes, servings } = each;

    return {
      id,
      title,
      image,
      readyInMinutes,
      servings,
    };
  });

  res
    .status(200)
    .render("addMeal", { layout: "dashboard", meals, mealPlanId, day, meal });
};

module.exports = {
  renderDashboard,
  renderMealPlan,
  renderAddMeal,
  renderSearchResults,
};
