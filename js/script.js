const formInputs = document.querySelectorAll(".form-inputs input");
const submitBtn = document.querySelector("button[type='submit']");
const passwordInputs = document.querySelectorAll("input[type='password']")

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$/

formInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length > 0) input.classList.remove("unfilled");
  });
});

passwordInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    passwordPattern.test(input.value) ? input.classList.remove("invalid") : input.classList.add("invalid");
  });
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();
});