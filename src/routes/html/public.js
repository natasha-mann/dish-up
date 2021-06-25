const { Router } = require("express");
const {
  renderLandingPage,
  renderHomePage,
  renderSearchResults,
  renderLogin,
  renderSignup,
  renderAboutUs,
} = require("../../controllers/html/public");
const router = Router();

router.get("/", renderLandingPage);
router.get("/home", renderHomePage);
router.get("/home/results", renderSearchResults);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.get("/aboutus", renderAboutUs);

module.exports = router;
