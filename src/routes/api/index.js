const { Router } = require("express");

const mealPlanRoutes = require("./mealPlans");
const mealRoutes = require("./meals");

const router = Router();

router.use("/mealplans", mealPlanRoutes);
router.use("/meals", mealRoutes);

module.exports = router;
