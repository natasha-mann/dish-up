const handleLogout = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  const response = await fetch("/auth/logout", options);
  if (response.status !== 200) {
    console.log("FAILED LOGOUT");
    window.location.replace("/login");
  } else {
    window.location.replace("/login");
  }
};

$("#logout-btn").click(handleLogout);
