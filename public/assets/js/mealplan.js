const handleClick = (event) => {
  event.preventDefault();
  const selectedButton = event.target;
  //Fix click on icon
  const day = $(selectedButton).attr("data-day");
  const meal = $(selectedButton).attr("data-meal");
  console.log(meal);
};
$("#mealPlanTable").click(handleClick);
