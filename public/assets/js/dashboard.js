const handleCreateMealPlan = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const description = $("#description").val();
  const start_date = $("#start-date").val();
  const end_date = moment(start_date).add(6, "days").format("YYYY-MM-DD");
  const user_id = 2;

  if (!title || !start_date) {
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
      start_date,
      end_date,
      user_id,
    }),
  };

  const response = await fetch("/api/mealplans", options);
  const data = await response.json();

  if (response.status !== 200) {
    console.error("Unable to create meal plan");
  } else {
    const { id } = data;
    window.location.replace(`/mealplan/${id}`);
  }
};

const handleSelectMealPlan = async (event) => {
  event.preventDefault();

  const mealplan_id = $("#mealplan-select").find(":selected").val();

  if (!mealplan_id) {
    $("#alert-div-select").empty();
    $("#alert-div-select")
      .append(`<div id="error-alert" class="alert alert-danger d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle me-4"></i>
    <div class="text-center">
      Please select a meal plan!
    </div>
  </div>`);
    return;
  }

  window.location.replace(`/mealplan/${mealplan_id}`);
};

$("#create-mealplan-form").submit(handleCreateMealPlan);
$("#select-mealplan-form").submit(handleSelectMealPlan);
