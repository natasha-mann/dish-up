const { Router } = require("express");

const router = Router();

const { getAllMealPlans } = require("../../controllers/api/mealPlans");

router.get("/", getAllMealPlans);


module.exports = router;
