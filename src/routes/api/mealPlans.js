const { Router } = require("express");

const router = Router();

const {
  getAllMealPlans,
  createMealPlan,
  deleteMealPlan,
} = require("../../controllers/api/mealPlans");

router.get("/", getAllMealPlans);

router.post("/", createMealPlan);

router.delete("/:id", deleteMealPlan);

module.exports = router;
