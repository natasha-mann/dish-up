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

const addMeal = async (req, res) => {
  res.send("add meal");
};

module.exports = { getAllMealPlans, createMealPlan, addMeal };
