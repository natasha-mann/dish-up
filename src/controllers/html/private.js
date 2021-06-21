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

    res.status(200).render("addMeal", {
      layout: "dashboard",
      day,
      meal,
      mealPlanId,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to render add meal plan." });
  }
};

const renderSearchResults = async (req, res) => {
  const { id: mealPlanId } = req.params;

  const { day, meal, searchInput, diet, intolerance } = req.query;

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7f1744dbc1d04e0a9153423050f1d307&query=${searchInput}&number=10&addRecipeNutrition=true&diet=${diet}&intolerances=${intolerance}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

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

  const noSearchResults = searchMeals.length === 0;

  res.status(200).render("addMeal", {
    layout: "dashboard",
    mealPlanId,
    day,
    meal,
    searchMeals,
    noSearchResults,
  });
};

const renderRecipe = async (req, res) => {
  try {
    const { mealId } = req.query;

    const url = `https://api.spoonacular.com/recipes/${mealId}/information?includeNutrition=true&apiKey=7f1744dbc1d04e0a9153423050f1d307`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!data) {
      return res.status(404).json({ error: "No results" });
    }
    const {
      id,
      title,
      image,
      summary,
      readyInMinutes,
      servings,
      extendedIngredients,
      nutrition,
      analyzedInstructions,
    } = data;

    const calories = nutrition.nutrients[0].amount;

    const ingredients = extendedIngredients.map((each) => {
      const { original } = each;
      return original;
    });

    const instructions = analyzedInstructions[0].steps;

    const steps = instructions.map((each) => {
      const { step } = each;
      return step;
    });

    console.log(steps);

    const recipe = {
      id,
      title,
      image,
      summary,
      calories,
      readyInMinutes,
      ingredients,
      servings,
      steps,
    };

    res.status(200).render("recipe", { layout: "recipe", recipe });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderDashboard,
  renderMealPlan,
  renderAddMeal,
  renderSearchResults,
  renderRecipe,
};
