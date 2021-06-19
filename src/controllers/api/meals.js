const fetch = require("node-fetch");

const getMeals = async (req, res) => {
  const { searchInput, diet, intolerance } = req.body;

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=aef1629a564f4778a914c956f90dbdb5&query=${searchInput}&number=10&addRecipeNutrition=true&diet=${diet}&intolerances=${intolerance}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const mealsArray = data.results;

  const meals = mealsArray.map((each) => {
    const { id, title, image, readyInMinutes, servings } = each;

    return {
      id,
      title,
      image,
      readyInMinutes,
      servings,
    };
  });

  if (!meals) {
    return res.status(404).json({ error: "No results" });
  }

  return res.status(200).json(meals);
};

const getRecipe = async (req, res) => {
  const { imageId } = req.body;

  const url = `https://api.spoonacular.com/recipes/${imageId}/information?apiKey=195fcac954e24aecacb8e7c04be39166&includeNutrition=false `;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  if (!data) {
    return res.status(404).json({ error: "No results" });
  }
  const {
    id,
    title,
    image,
    summary,
    readyInMinutes,
    servings,
    calories,
    analyzedInstructions,
  } = data;

  const recipe = {
    id,
    title,
    image,
    summary,
    readyInMinutes,
    servings,
    calories,
    analyzedInstructions,
  };

  return res.status(200).json(recipe);
};

module.exports = { getMeals, getRecipe };
