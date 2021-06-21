const fetch = require("node-fetch");
const { Meal } = require("../../models");

// const getRecipe = async (req, res) => {
//   const { imageId } = req.body;

//   const url = `https://api.spoonacular.com/recipes/${imageId}/information?apiKey=195fcac954e24aecacb8e7c04be39166&includeNutrition=false `;

//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//   };

//   const response = await fetch(url, options);
//   const data = await response.json();
//   console.log(data);

//   if (!data) {
//     return res.status(404).json({ error: "No results" });
//   }
//   const {
//     id,
//     title,
//     image,
//     summary,
//     readyInMinutes,
//     servings,
//     calories,
//     analyzedInstructions,
//   } = data;

//   const recipe = {
//     id,
//     title,
//     image,
//     summary,
//     readyInMinutes,
//     servings,
//     calories,
//     analyzedInstructions,
//   };

//   return res.status(200).json(recipe);
// };

const addMeal = async (req, res) => {
  try {
    const {
      spoonacularId: spoonacular_id,
      title,
      readyInMinutes: ready_in_minutes,
      servings,
      calories,
      image,
    } = req.body;
    const newMeal = await Meal.create({
      spoonacular_id,
      title,
      ready_in_minutes,
      servings,
      calories,
      image,
    });

    if (!newMeal) {
      return res.status(404).json({ error: "unable to add meal" });
    }
    return res.status(200).json({ success: "meal successfully added" });
  } catch (error) {
    console.error(`${error.message}`);
    return res.status(500).json({ error: "failed to add" });
  }
};

module.exports = { addMeal };
