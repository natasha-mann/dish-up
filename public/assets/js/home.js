const handleSubmit = async (event) => {
  event.preventDefault();
  $("#search-text").hide();
  $("body").addClass("busy");

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

// const handleCarouselClick = async (event) => {
//   const mealId = event.currentTarget.id;
//   window.location.assign(`/recipe?mealId=${mealId}`);
// };

const handleViewClick = async (event) => {
  const mealId = event.currentTarget.id;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(`/recipe?mealId=${mealId}`);

  if (response.status === 404) {
    $("#login-modal").modal("show");
  }

  // window.location.assign(`/recipe?mealId=${mealId}`);
};

$(".carousel-image").click(handleViewClick);
$("#meal-search").submit(handleSubmit);
$("[name='view-btn']").click(handleViewClick);
