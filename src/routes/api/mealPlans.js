const { Router } = require("express");

const router = Router();

const {
  getAllMealPlans,
  createMealPlan,
} = require("../../controllers/api/mealPlans");

router.get("/", getAllMealPlans);

router.post("/", createMealPlan);

module.exports = router;
