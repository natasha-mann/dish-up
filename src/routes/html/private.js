const { Router } = require("express");
const {
  renderDashboard,
  renderMealPlan,
  renderAddMeal,
  renderUpdateMeal,
  renderSearchResults,
  renderRecipe,
  renderUpdateResults,
} = require("../../controllers/html/private");
const router = Router();

router.get("/dashboard", renderDashboard);

router.get("/mealplan/:id", renderMealPlan);

router.get("/mealplan/:id/add", renderAddMeal);

router.get("/mealplan/:id/update", renderUpdateMeal);

router.get("/mealplan/:id/add/results", renderSearchResults);

router.get("/mealplan/:id/update/results", renderUpdateResults);

router.get("/recipe", renderRecipe);

module.exports = router;
