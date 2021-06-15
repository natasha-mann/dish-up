const login = async (req, res) => {
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};

const signup = async (req, res) => {
  res.send("signup");
};

module.exports = { login, logout, signup };
