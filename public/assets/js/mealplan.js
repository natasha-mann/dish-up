const handleClick = async (event) => {
  event.preventDefault();
  const selectedMeal = event.target;

  const day = $(selectedMeal).attr("data-day");
  const meal = $(selectedMeal).attr("data-meal");
  const id = $(event.currentTarget).attr("id");
  const dayId = $(selectedMeal).attr("data-id");

  const addMeal = $(selectedMeal).hasClass("add-meal");
  const editMeal = $(selectedMeal).hasClass("edit-meal");
  const deleteMeal = $(selectedMeal).hasClass("delete-meal");
  const viewMeal = $(selectedMeal).hasClass("card-img-top");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  if (day && meal) {
    if (addMeal) {
      const response = await fetch(
        `/mealplan/${id}/add?day=${day}&meal=${meal}&dayId=${dayId}`,
        options
      );
      if (response.status !== 200) {
        console.error("Failed to add meal");
      } else {
        window.location.assign(
          `/mealplan/${id}/add?day=${day}&meal=${meal}&dayId=${dayId}`
        );
      }
    }

    if (editMeal) {
      const response = await fetch(
        `/mealplan/${id}/update?day=${day}&meal=${meal}&dayId=${dayId}`,
        options
      );
      if (response.status !== 200) {
        console.error("Failed to update meal");
      } else {
        window.location.assign(
          `/mealplan/${id}/update?day=${day}&meal=${meal}&dayId=${dayId}`
        );
      }
    }

    if (deleteMeal) {
    }
  }

  if (viewMeal) {
    const spoonacularId = $(selectedMeal).attr("data-spoon");
    window.location.assign(`/recipe?mealId=${spoonacularId}`);
  }
};

$('[name="mealPlanTable"]').click(handleClick);
