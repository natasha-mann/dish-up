const { Router } = require("express");

const htmlRoutes = require("./html");

const router = Router();

// router.use("/api", apiRoutes);
// router.use("/auth", authRoutes);

router.use("/", htmlRoutes);

module.exports = router;
