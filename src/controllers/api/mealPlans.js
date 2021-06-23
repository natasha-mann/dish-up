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

const createMealPlan = async (req, res) => {
  try {
    const { title, description, start_date, end_date } = req.body;
    const { userId: user_id } = req.session;

    const mealPlan = { title, description, start_date, end_date, user_id };

    const newMealPlan = await MealPlan.create(mealPlan);

    res.status(200).json({ id: newMealPlan.id });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to create meal plan" });
  }
};

const deleteMealPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMealPlan = await MealPlan.destroy({
      where: { id },
    });
    if (!deletedMealPlan) {
      return res.status(404).json({ error: "meal plan does not exist" });
    }
    return res.status(200).json({ success: "meal plan deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete meal plan" });
  }
};

module.exports = { getAllMealPlans, createMealPlan, deleteMealPlan };
