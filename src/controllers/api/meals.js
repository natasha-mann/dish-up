const fetch = require("node-fetch");

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

module.exports = { getMeals, getRecipe };
