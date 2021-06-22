const { Router } = require("express");

const { addMeal } = require("../../controllers/api/meals");

const router = Router();

router.post("/", addMeal);

module.exports = router;
