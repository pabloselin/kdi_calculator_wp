console.log("init expense calculator wp");

document.addEventListener("click", function (e) {
  if (
    (e.target && e.target.className === "kd_calculate_button") ||
    (e.target && e.target.className === "kd_calculate_button active")
  ) {
    console.log(e.target);
    let buttons = document.getElementsByClassName("kd_calculate_button");
    let appContainer = document.getElementById("kd_expense_calculator_wp");

    if (appContainer.classList.contains("active")) {
      appContainer.classList.remove("active");
      document.body.classList.remove("kd_expense_calculator_wp_active");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
    } else {
      appContainer.classList.add("active");
      document.body.classList.add("kd_expense_calculator_wp_active");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("active");
      }
    }
  }
});
