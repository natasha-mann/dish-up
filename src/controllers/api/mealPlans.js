const { MealPlan, Day, Meal } = require("../../models");

const getAllMealPlans = async (req, res) => {
  try {
    const mealPlanData = await MealPlan.findAll({
      include: {
        model: Day,
        include: [
          { model: Meal, as: "breakfast" },
          { model: Meal, as: "lunch" },
          { model: Meal, as: "dinner" },
        ],
      },
    });

    const mealPlans = mealPlanData.map((mealPlan) =>
      mealPlan.get({ plain: true })
    );

    return res.status(200).json(mealPlans);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get all meal plans." });
  }
};

module.exports = { getAllMealPlans };
