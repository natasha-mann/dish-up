const onSubmit = async (event) => {
  event.preventDefault();

  $("#signup-text").hide();
  $("body").addClass("busy");

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    $("body").removeClass("busy");
    $("#signup-text").show();
    $("#alert-div").empty();
    $("#alert-div")
      .append(`<div id="error-alert" class="alert alert-danger d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle me-4"></i>
    <div class="text-center">
      Please complete all fields!
    </div>
  </div>`);
    return;
  }

  if (password === confirmPassword) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    };

    const response = await fetch("/auth/signup", options);

    if (response.status !== 200) {
      $("body").removeClass("busy");

      console.error("Sign up unsuccessful");
    } else {
      $("body").removeClass("busy");
      $("#signup-text").show();
      window.location.assign("/login");
    }
  } else {
    $("body").removeClass("busy");
    $("#signup-text").show();
    $("#alert-div").empty();
    $("#alert-div")
      .append(`<div id="error-alert" class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle me-4"></i>
    <div class="text-center">
      Passwords don't match. Please try again.
    </div>
  </div>`);
  }
};

$("#signup-form").submit(onSubmit);
