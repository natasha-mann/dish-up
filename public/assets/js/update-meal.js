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

const handleUpdate = async (event) => {
  event.preventDefault();

  const card = event.target;

  const mealPlanId = $('[name="updateMeal"]').attr("id");
  const day = $("#search-title").attr("data-day");
  const meal = $("#search-title").attr("data-meal");
  const spoonacularId = $(card).attr("data-id");
  const title = $(card).attr("data-title");
  const readyInMinutes = $(card).attr("data-ready");
  const servings = $(card).attr("data-servings");
  const image = $(card).attr("data-image");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      mealPlanId,
      day,
      meal,
      spoonacularId,
      title,
      readyInMinutes,
      servings,
      image,
    }),
  };
  const response = await fetch(`/api/meals`, options);
  if (response.status !== 200) {
    console.error("Failed to add meal");
  } else {
    window.location.replace(`/mealplan/${mealPlanId}`);
  }
};

$("#update-search").submit(handleUpdateSubmit);
$("#searchResults").click(handleUpdate);
