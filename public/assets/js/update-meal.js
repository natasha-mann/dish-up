const handleUpdateSubmit = async (event) => {
  event.preventDefault();

  const meal = $("#search-title").attr("data-meal");
  const day = $("#search-title").attr("data-day");
  const id = $("#search-title").attr("data-id");

  const searchInput = $("#search-input").val();
  const diet = $("#diet-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();
  const intolerance = $("#intolerance-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();

  window.location.replace(
    `/mealplan/${id}/update/results?day=${day}&meal=${meal}&searchInput=${searchInput}&diet=${diet}&intolerance=${intolerance}`
  );
};

const handleUpdate = (event) => {
  event.preventDefault();
  const mealPlanId = $('[name="updateMeal"]').attr("id");
  const day = $("#search-title").attr("data-day");
  const meal = $("#search-title").attr("data-meal");
  const spoonacularId = $("#mealCard").attr("data-name");
  const title = $("#title").attr("data-name");
  const readyInMinutes = $("#readyInMinutes").attr("data-name");
  const servings = $("#servings").attr("data-name");
  const calories = $("#mealCard").attr("data-calories");
  const image = $("#image").attr("data-name");
};

$("#update-search").submit(handleUpdateSubmit);
$('[name="updateMeal"]').click(handleUpdate);
