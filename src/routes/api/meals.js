const { Router } = require("express");

const { addMeal, deleteMeal } = require("../../controllers/api/meals");

const router = Router();

router.post("/", addMeal);
router.delete("/:id", deleteMeal);

module.exports = router;
