const handleSubmit = async (event) => {
  event.preventDefault();
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
      searchInput,
      diet,
      intolerance,
    }),
  };

  const response = await fetch("/api/meals", options);
  const meals = await response.json();
  console.log(meals);

  // if (response.status !== 200) {
  //   console.error("Failed to render search results");
  // } else {
  //   window.location.replace(
  //     `/mealplan/${id}/add/results?day=${day}&meal=${meal}`
  //   );
  // }
};

$("#meal-search").submit(handleSubmit);
