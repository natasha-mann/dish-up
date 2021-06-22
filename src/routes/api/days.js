const { Router } = require("express");

const { addDay, updateDay } = require("../../controllers/api/days");

const router = Router();

router.post("/", addDay);
router.put("/:id", updateDay);

module.exports = router;
