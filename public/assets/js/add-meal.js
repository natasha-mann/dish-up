const handleSearch = async (event) => {
  event.preventDefault();

  const meal = $("#search-title").attr("data-meal");
  const day = $("#search-title").attr("data-day");
  const id = $("#search-title").attr("data-id");
  const dayId = $("#search-title").attr("data-dayId");

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

  window.location.assign(
    `/mealplan/${id}/add/results?day=${day}&meal=${meal}&dayId=${dayId}&searchInput=${searchInput}&diet=${diet}&intolerance=${intolerance}`
  );
};

const handleViewClick = (event) => {
  const mealId = event.currentTarget.id;

  window.location.assign(`/recipe?mealId=${mealId}`);
};

const handleAdd = async (event) => {
  event.preventDefault();

  const card = event.target;

  const mealPlanId = $('[name="addMeal"]').attr("id");
  const day = $("#search-title").attr("data-day");
  const meal = $("#search-title").attr("data-meal");
  const dayId = $("#search-title").attr("data-dayId");
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
      spoonacularId,
      title,
      readyInMinutes,
      servings,
      image,
    }),
  };

  const postResponse = await fetch(`/api/meals`, options);
  const mealData = await postResponse.json();

  if (postResponse.status !== 200) {
    console.error("Failed to add meal");
  } else {
    if (!dayId) {
      const mealId = mealData.id;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
          day,
          meal,
          mealId,
          mealPlanId,
        }),
      };
      const response = await fetch(`/api/days`, options);

      if (response.status !== 200) {
        console.error("Failed to add day");
      } else {
        window.location.assign(`/mealplan/${mealPlanId}`);
      }
    } else {
      const mealId = mealData.id;

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
          dayId,
          day,
          meal,
          mealId,
          mealPlanId,
        }),
      };
      const response = await fetch(`/api/days/${dayId}`, options);

      if (response.status !== 200) {
        console.error("Failed to add day");
      } else {
        window.location.assign(`/mealplan/${mealPlanId}`);
      }
    }
  }
};

$("#meal-search").submit(handleSearch);
$('[name="view-btn"]').click(handleViewClick);
$("#searchResults").click(handleAdd);
