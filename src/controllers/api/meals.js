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

const deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;

    const deletedMeal = await Meal.destroy({
      where: { id, user_id: userId },
    });

    if (!deletedMeal) {
      return res.status(404).json({ error: "Meal does not exist" });
    }

    return res.status(200).json({ success: "Meal deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete meal" });
  }
};

module.exports = { addMeal, deleteMeal };
