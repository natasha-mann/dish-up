const { Router } = require("express");

const { getMeals, getRecipe } = require("../../controllers/api/meals");

const router = Router();

router.post("/", getMeals);
router.post("/recipe", getRecipe);

module.exports = router;
