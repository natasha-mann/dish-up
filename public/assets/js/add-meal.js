const handleSubmit = (event) => {
  event.preventDefault();
  // const searchInput = $("#search-input").val();

  // const diet = $("#diet-input")
  //   .find(":checked")
  //   .map((each) => {
  //     return $(each).attr("id");
  //   });
  // console.log(diet);

  window.location.replace("/mealplan/2/add/results");
};

$("#meal-search").submit(handleSubmit);
