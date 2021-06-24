const handleMealDelete = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/meals/${id}`, options);
  if (response.status !== 200) {
    console.error("Failed to delete meal");
  } else {
    window.location.assign("/meals");
  }
};

$("[name='confirm-meal-delete']").click(handleMealDelete);
