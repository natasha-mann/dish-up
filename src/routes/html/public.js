const { Router } = require("express");
const {
  renderLandingPage,
  renderHomePage,
  renderLogin,
  renderSignup,
} = require("../../controllers/html/public");
const router = Router();

router.get("/", renderLandingPage);
router.get("/home", renderHomePage);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);
//insert recipe, results page

module.exports = router;
