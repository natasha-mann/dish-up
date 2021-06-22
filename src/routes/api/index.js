const { Router } = require("express");

const mealPlanRoutes = require("./mealPlans");
const mealRoutes = require("./meals");
const dayRoutes = require("./days");

const router = Router();

router.use("/mealplans", mealPlanRoutes);
router.use("/meals", mealRoutes);
router.use("/days", dayRoutes);

module.exports = router;
