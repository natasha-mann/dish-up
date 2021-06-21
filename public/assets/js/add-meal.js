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

  window.location.replace(
    `/mealplan/${id}/add/results?day=${day}&meal=${meal}&dayId=${dayId}&searchInput=${searchInput}&diet=${diet}&intolerance=${intolerance}`
  );
};

const handleViewClick = (event) => {
  const mealId = event.currentTarget.id;

  window.location.replace(`/recipe?mealId=${mealId}`);
};

$("#meal-search").submit(handleSearch);
$('[name="view-btn"]').click(handleViewClick);
$("#searchResults").click(handleAdd);
