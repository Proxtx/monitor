let password = document.getElementById("password");
password.addEventListener("keyup", async (e) => {
  if (e.key == "Enter") {
    cookie.pwd = password.value;
    location.href = location.href;
  }
});
