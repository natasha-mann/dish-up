const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.status(404).json({ error: "User not logged in" });
  }
};

module.exports = auth;
