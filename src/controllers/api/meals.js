const { Meal, Day } = require("../../models");

const addMeal = async (req, res) => {
  try {
    const {
      spoonacularId: spoonacular_id,
      title,
      readyInMinutes: ready_in_minutes,
      servings,
      image,
    } = req.body;

    const newMeal = await Meal.create({
      spoonacular_id,
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
    const { id, day, meal, dayId } = req.body;

    const { userId } = req.session;

    const deletedMeal = await Day.destroy(dayId, {});

    if (!deletedMeal) {
      res.status(404).json({ error: "Unable to delete meal from meal plan" });
    }
    res
      .status(200)
      .json({ success: "Successfully deleted meal from meal plan" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Unable to delete meal from meal plan" });
  }
};

module.exports = { addMeal, deleteMeal };
