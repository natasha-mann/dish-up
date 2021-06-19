const { Router } = require("express");

const { getMeals } = require("../../controllers/api/meals");

const router = Router();

router.post("/", getMeals);

module.exports = router;
