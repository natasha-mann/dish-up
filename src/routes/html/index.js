const { Router } = require("express");

const publicRoutes = require("./public");
const privateRoutes = require("./private");
const auth = require("../../middleware/auth");

const router = Router();

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;
