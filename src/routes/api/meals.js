const { Router } = require("express");

const { addMeal } = require("../../controllers/api/meals");

const router = Router();

router.post("/", addMeal);
// router.post("/recipe", getRecipe);

module.exports = router;
