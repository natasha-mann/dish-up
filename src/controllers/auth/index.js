const { User } = require("../../models");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};

const signup = async (req, res) => {
  res.send("signup");
};

module.exports = { login, logout, signup };
