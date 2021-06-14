const { Day, Diet, Intolerance, Meal, MealPlan, User } = require("./models");

const getAllDay = async (req, res) => {
  const dayData = await Day.findAll({
    include: [
      { model: Meal, as: "breakfast" },
      { model: Meal, as: "lunch" },
      { model: Meal, as: "dinner" },
      {
        model: MealPlan,
        include: {
          model: User,
        },
      },
    ],
  });
  return dayData.map((day) => day.get({ plain: true }));
};

const init = async () => {
  const day = await getAllDay();
  console.log(day);
};

init();
