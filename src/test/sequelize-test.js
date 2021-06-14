const {
  Day,
  Diet,
  Intolerance,
  Meal,
  MealPlan,
  User,
  UserDiet,
  UserIntolerance,
} = require("../models");

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

const getAllUser = async () => {
  const userData = await User.findAll({
    include: [{ model: Diet }, { model: Intolerance }],
  });
  return userData.map((user) => user.get({ plain: true }));
};

const init = async () => {
  const day = await getAllDay();
  console.log(day);

  const user = await getAllUser();
  console.log(user);
};

init();
