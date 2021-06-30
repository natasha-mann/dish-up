const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    // res.status(404).json({ error: "User not logged in" });
    res.status(404).redirect("/login");
  }
};

module.exports = auth;
