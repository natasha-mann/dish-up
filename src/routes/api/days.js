const { Router } = require("express");

const { addDay, updateDay, removeMeal } = require("../../controllers/api/days");

const router = Router();

router.post("/", addDay);
router.put("/:id", updateDay);
router.put("/:id/meal", removeMeal);

module.exports = router;
