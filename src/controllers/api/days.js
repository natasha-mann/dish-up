const { Day } = require("../../models");

const addDay = async (req, res) => {
  try {
    const { day: name, meal, mealId, mealPlanId: meal_plan_id } = req.body;

    if (meal === "breakfast") {
      const newDay = await Day.create({
        name,
        breakfast_meal_id: mealId,
        meal_plan_id,
      });

      if (!newDay) {
        return res.status(404).json({ error: "unable to add day" });
      }
      return res.status(200).json(newDay);
    }

    if (meal === "lunch") {
      const newDay = await Day.create({
        name,
        lunch_meal_id: mealId,
        meal_plan_id,
      });
      if (!newDay) {
        return res.status(404).json({ error: "unable to add day" });
      }
      return res.status(200).json(newDay);
    }

    if (meal === "dinner") {
      const newDay = await Day.create({
        name,
        dinner_meal_id: mealId,
        meal_plan_id,
      });
      if (!newDay) {
        return res.status(404).json({ error: "unable to add day" });
      }
      return res.status(200).json(newDay);
    }
  } catch (error) {
    console.error(`${error.message}`);
    return res.status(500).json({ error: "failed to add day" });
  }
};

const updateDay = async (req, res) => {
  try {
    const {
      dayId: id,
      day: name,
      meal,
      mealId,
      mealPlanId: meal_plan_id,
    } = req.body;

    if (meal === "breakfast") {
      const updatedDay = await Day.update(
        {
          name,
          breakfast_meal_id: mealId,
          meal_plan_id,
        },
        { where: { id } }
      );

      if (!updatedDay) {
        return res.status(404).json({ error: "unable to update day" });
      }
      return res.status(200).json(updatedDay);
    }

    if (meal === "lunch") {
      const updatedDay = await Day.update(
        {
          name,
          lunch_meal_id: mealId,
          meal_plan_id,
        },
        { where: { id } }
      );

      if (!updatedDay) {
        return res.status(404).json({ error: "unable to update day" });
      }
      return res.status(200).json(updatedDay);
    }

    if (meal === "dinner") {
      const updatedDay = await Day.update(
        {
          name,
          dinner_meal_id: mealId,
          meal_plan_id,
        },
        { where: { id } }
      );

      if (!updatedDay) {
        return res.status(404).json({ error: "unable to update day" });
      }
      return res.status(200).json(updatedDay);
    }
  } catch (error) {
    console.error(`${error.message}`);
    return res.status(500).json({ error: "failed to add day" });
  }
};

module.exports = { addDay, updateDay };
