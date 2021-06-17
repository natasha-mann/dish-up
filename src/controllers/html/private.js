const renderDashboard = (req, res) => {
  res.render("dashboard", {layout:"dashboard"});
};

module.exports = { renderDashboard };
