const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "Failed to login" });
    }

    const validPassword = await user.isCorrectPassword(password);

    if (!validPassword) {
      console.log("Invalid password");
      return res.status(404).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.email = user.email;
      req.session.firstName = user.first_name;
      req.session.lastName = user.last_name;
      req.session.userId = user.id;
      return res.status(200).json({ success: "Login successful" });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

const logout = async (req, res) => {
  res.send("logout");
};

const signup = async (req, res) => {
  res.send("signup");
};

module.exports = { login, logout, signup };
