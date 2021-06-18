const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
