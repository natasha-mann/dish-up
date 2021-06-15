const { Router } = require("express");

const authRoutes = require("./auth");
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

const router = Router();

router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/", htmlRoutes);

module.exports = router;
