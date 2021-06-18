const { MealPlan, Day, Meal } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.session;

    const mealPlanData = await MealPlan.findAll({ where: { user_id: userId } });

    const mealPlans = mealPlanData.map((mealPlan) =>
      mealPlan.get({ plain: true })
    );

    return res.render("dashboard", {
      layout: "dashboard",
      firstName,
      lastName,
      mealPlans,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
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

    if (!mealPlan) {
      return res.status(404).json({ error: "Meal plan does not exist" });
    }

    res.status(200).render("mealPlan", { layout: "dashboard", mealPlan });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to render meal plan." });
  }
};

module.exports = { renderDashboard, renderMealPlan };
