

const { Router } = require("express");

const mealPlanRoutes = require("./mealPlans");

const router = Router();

router.use("/mealplans", mealPlanRoutes);



module.exports = router;