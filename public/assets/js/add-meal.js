const handleSubmit = async (event) => {
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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      meal,
      searchInput,
      diet,
      intolerance,
    }),
  };

  const response = await fetch("/api/meals", options);
  const meals = await response.json();

  if (response.status !== 200) {
    console.error("Failed to render search results");
  } else {
    window.location.replace(
      `/mealplan/${id}/add/results?day=${day}&meal=${meal}`
    );
  }
};

$("#meal-search").submit(handleSubmit);
