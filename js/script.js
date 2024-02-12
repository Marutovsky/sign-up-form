const formInputs = document.querySelectorAll(".form-inputs input");
const submitBtn = document.querySelector("button[type='submit'");

formInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length > 0) input.classList.remove("unfilled");
  });
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
});