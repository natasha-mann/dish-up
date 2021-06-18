const handleSubmit = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  const user = { email, password };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(user),
  };

  const response = await fetch("/auth/login", options);
  console.log(response);

  if (response.status !== 200) {
    console.error("Failed login");
    $("#alert-div").empty();
    $("#alert-div")
      .append(`<div id="error-alert" class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle me-4"></i>
    <div>
      Email or password incorrect. Please try again!
    </div>
  </div>`);
  } else {
    window.location.replace("/dashboard");
  }
};

$("#login-form").submit(handleSubmit);
