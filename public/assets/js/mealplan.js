const handleClick = async (event) => {
  event.preventDefault();
  const selectedButton = event.target;
  //Fix click on icon
  const day = $(selectedButton).attr("data-day");
  const meal = $(selectedButton).attr("data-meal");
  const id = $(event.currentTarget).attr("id");
  const dayId = $(selectedButton).attr("data-id");

  const add = $(selectedButton).hasClass("add-meal");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  if (day && meal) {
    if (add) {
      const response = await fetch(
        `/mealplan/${id}/add?day=${day}&meal=${meal}&dayId=${dayId}`,
        options
      );
      if (response.status !== 200) {
        console.error("Failed to add meal");
      } else {
        window.location.replace(
          `/mealplan/${id}/add?day=${day}&meal=${meal}&dayId=${dayId}`
        );
      }
    } else {
      const response = await fetch(
        `/mealplan/${id}/update?day=${day}&meal=${meal}&dayId=${dayId}`,
        options
      );
      if (response.status !== 200) {
        console.error("Failed to update meal");
      } else {
        window.location.replace(
          `/mealplan/${id}/update?day=${day}&meal=${meal}&dayId=${dayId}`
        );
      }
    }
  }
};

$('[name="mealPlanTable"]').click(handleClick);
