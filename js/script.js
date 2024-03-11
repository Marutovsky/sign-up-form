const formInputs = document.querySelectorAll(".form-inputs input");
const submitBtn = document.querySelector("button[type='submit']");
const passwordInputs = document.querySelectorAll("input[type='password']")
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordCaption = document.querySelector("#password-caption");

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$/

formInputs.forEach(input => {
  input.addEventListener("keyup", () => {
    if (input.value.length > 0) input.classList.remove("unfilled");
  });
});

passwordInputs.forEach(input => {
  input.addEventListener("keyup", () => {
    if (passwordPattern.test(input.value)) {
      input.classList.remove("invalid");
      passwordCaption.textContent = null;
    } else {
      input.classList.add("invalid");
      passwordCaption.textContent = "Must contain at least one number, one uppercase and lowercase letter, special character, and 8 to 32 characters";
    } 
  });
});

submitBtn.addEventListener('click', e => {
  if (!validatePassword(password, passwordConfirmation)) {
    e.preventDefault();
    passwordCaption.textContent = "* Passwords do not match";
    passwordInputs.forEach(input => {
      input.classList.add("invalid");
    })
  }
});

function validatePassword(password, passwordConfirmation) {
  if (password.value !== passwordConfirmation.value) return false;
  else if (!passwordPattern.test(password.value)) return false;
  else return true;
}