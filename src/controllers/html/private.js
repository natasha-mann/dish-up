const { MealPlan, Day, Meal } = require("../../models");

const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderMealPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const mealPlanData = await MealPlan.findByPk(id, {
      include: {
        model: Day,
        include: [
          { model: Meal, as: "breakfast" },
          { model: Meal, as: "lunch" },
          { model: Meal, as: "dinner" },
        ],
      },
    });

    const mealPlan = mealPlanData.get({ plain: true });
    console.log(mealPlan);

    res.render("mealPlan", mealPlan);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get all meal plans." });
  }
};

module.exports = { renderDashboard, renderMealPlan };
