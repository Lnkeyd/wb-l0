import { mailRegExp } from "../utils/regularExp.js";

const EMAIL_ERROR_TEXT = "Проверьте адрес электронной почты";

const inputEmail = document.querySelector(
  ".customer-form__email"
).firstElementChild;

const emailTextError = document.querySelector("#email-error");

// ERROR FLAGS
let inputEmailError = false;

// Input listeners start
inputEmail.addEventListener("keyup", function (event) {
  event.target.value = event.target.value.replace(/[^\x00-\x7F]/g, "");
  let value = event.target.value;

  let valid = mailRegExp.test(value);

  if (event.target.value.length < 1) {
    valid = true;
  }

  if (inputEmailError === true) {
    if (valid === true) {
      inputEmailError = false;
      inputEmail.parentElement.classList.remove("customer-form_error");
      emailTextError.textContent = "";
    } else {
      inputEmailError = true;
      inputEmail.parentElement.classList.add("customer-form_error");
      emailTextError.textContent = EMAIL_ERROR_TEXT;
    }
  }
});

inputEmail.addEventListener("focusout", function (event) {
  if (event.target.value.length) {
    let valid = mailRegExp.test(event.target.value);

    if (valid === true) {
      inputEmailError = false;
      inputEmail.parentElement.classList.remove("customer-form_error");
      emailTextError.textContent = "";
    } else {
      inputEmailError = true;
      inputEmail.parentElement.classList.add("customer-form_error");
      emailTextError.textContent = EMAIL_ERROR_TEXT;
    }
    FORM_DATA.email.value = !inputEmailError ? event.target.value : "";
    console.log(inputEmailError + "FOCUS_OUT");
  }
});
