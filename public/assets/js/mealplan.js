const handleClick = async (event) => {
  event.preventDefault();
  const selectedButton = event.target;
  //Fix click on icon
  const day = $(selectedButton).attr("data-day");
  const meal = $(selectedButton).attr("data-meal");
  const id = $(event.currentTarget).attr("id");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(
    `/mealplan/${id}/add?day=${day}&meal=${meal}`,
    options
  );
  console.log(response);
};

$('[name="mealPlanTable"]').click(handleClick);
