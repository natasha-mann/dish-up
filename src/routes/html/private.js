const { Router } = require("express");
const {
  renderDashboard,
  renderMealPlan,
  renderAddMeal,
  renderSearchResults,
} = require("../../controllers/html/private");
const router = Router();

router.get("/dashboard", renderDashboard);

router.get("/mealplan/:id", renderMealPlan);

router.get("/mealplan/:id/add", renderAddMeal);

router.get("/mealplan/:id/add/results", renderSearchResults);

module.exports = router;
