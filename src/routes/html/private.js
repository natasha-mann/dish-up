const { Router } = require("express");
const {
  renderDashboard,
  renderMealPlan,
} = require("../../controllers/html/private");
const router = Router();

router.get("/dashboard", renderDashboard);

router.get("/mealplan/:id", renderMealPlan);

module.exports = router;
