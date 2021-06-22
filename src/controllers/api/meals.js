const { Meal } = require("../../models");

const addMeal = async (req, res) => {
  try {
    const {
      spoonacularId: spoonacular_id,
      title,
      readyInMinutes: ready_in_minutes,
      servings,
      image,
    } = req.body;

    const { userId } = req.session;

    const meal = await Meal.findOne({
      where: {
        spoonacular_id,
        user_id: userId,
      },
    });

    if (meal) {
      return res.status(200).json(meal);
    }

    const newMeal = await Meal.create({
      spoonacular_id,
      user_id: userId,
      title,
      ready_in_minutes,
      servings,
      image,
    });

    if (!newMeal) {
      return res.status(404).json({ error: "unable to add meal" });
    }
    return res.status(200).json(newMeal);
  } catch (error) {
    console.error(`${error.message}`);
    return res.status(500).json({ error: "failed to add" });
  }
};

module.exports = { addMeal };
