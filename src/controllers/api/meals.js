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

module.exports = { getMeals };
