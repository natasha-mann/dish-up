const renderLandingPage = (req, res) => {
  res.render("landing-page");
};

const renderHomePage = (req, res) => {
  res.render("homepage");
};

const renderLogin = (req, res) => {
  res.render("login", { layout: "login" });
};

const renderSignup = (req, res) => {
  res.render("signup", { layout: "signup" });
};

module.exports = {
  renderLandingPage,
  renderHomePage,
  renderLogin,
  renderSignup,
};
