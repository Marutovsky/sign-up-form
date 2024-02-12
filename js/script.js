const formInputs = document.querySelectorAll(".form-inputs input");

formInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length > 0) input.classList.remove("unfilled");
  });
});