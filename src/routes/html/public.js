const { Router } = require("express");
const { renderHomepage } = require("../../controllers/html/public");
const router = Router();

router.get("/", renderHomepage);

module.exports = router;
