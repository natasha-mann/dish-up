const renderHomepage = (req, res) => {
  res.render("homepage");
};

const renderLogin = (req, res) => {
  res.render("login");
};

const renderSignup = (req, res) => {
  res.render("signup");
};

module.exports = { renderHomepage, renderLogin, renderSignup };
