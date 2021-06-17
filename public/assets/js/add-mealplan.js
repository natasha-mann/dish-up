const handleSubmit = (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const description = $("#description").val();
  const startDate = $("#start-date").val();

  if (!title || !startDate) {
    $("#alert-div").empty();
    $("#alert-div")
      .append(`<div id="error-alert" class="alert alert-danger d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle me-4"></i>
    <div class="text-center">
      Please complete title and date fields!
    </div>
  </div>`);
    return;
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
      startDate,
    }),
  };

  const response = await fetch("/api/mealplans", options);

  if (response.status !== 200) {
    console.error("Unable to create mealplan");
  } else {
    const { id } = response;
    window.location.replace(`/mealplan/${id}`);
  }
};

$("#create-mealplan-form").submit(handleSubmit);
