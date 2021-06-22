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

  window.location.assign(
    `/home/results?searchInput=${searchInput}&diet=${diet}&intolerance=${intolerance}`
  );
};

const handleCarouselClick = async (event) => {
  const mealId = event.currentTarget.id;
  window.location.assign(`/recipe?mealId=${mealId}`);
};

const handleViewClick = (event) => {
  const mealId = event.currentTarget.id;

  window.location.assign(`/recipe?mealId=${mealId}`);
};

$(".carousel-item").click(handleCarouselClick);
$("#meal-search").submit(handleSubmit);
$("[name='view-btn']").click(handleViewClick);
