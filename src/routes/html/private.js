const { Router } = require("express");
const { renderDashboard } = require("../../controllers/html/private");
const router = Router();

router.get("/dashboard", renderDashboard);

module.exports = router;
