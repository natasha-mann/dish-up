const { Router } = require("express");

const { addMeal, deleteMeal } = require("../../controllers/api/meals");

const router = Router();

router.post("/", addMeal);

router.post("/delete", deleteMeal);
// router.post("/recipe", getRecipe);

module.exports = router;
