const { Router } = require("express");
const {
  renderDashboard,
  renderMealPlan,
  renderAddMeal,
} = require("../../controllers/html/private");
const router = Router();

router.get("/dashboard", renderDashboard);

router.get("/mealplan/:id", renderMealPlan);

router.get("/mealplan/:id/add", renderAddMeal);

module.exports = router;
