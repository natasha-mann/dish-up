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
  if (response.status !== 200) {
    console.error("Failed to add meal");
  } else {
    window.location.replace(`/mealplan/${id}/add?day=${day}&meal=${meal}`);
  }
};

$('[name="mealPlanTable"]').click(handleClick);
