import { phoneFormat, checkValid } from "../utils/phoneFormat.js";

const inputPhone = document.querySelector(
  ".customer-form__phone"
).firstElementChild;

const phoneTextError = document.querySelector("#phone-error");

// ERROR FLAGS
let inputPhoneError = false;

// Input listeners start
inputPhone.addEventListener("keyup", function (event) {
  const value = event.target.value;
  //1. Убираем все eng letters
  //2. Убираем все non-ASCII chars/letters
  event.target.value = value
    .replace(/[a-zA-Z]/g, "")
    .replace(/[^\x00-\x7F]/g, "");
  if (event.target.value === "++") event.target.value = "";
  if (event.target.value.length > 30) {
    event.target.value = event.target.value.slice(0, 30);
  }
  event.target.value = phoneFormat(event.target.value);

  let valid = checkValid(event.target.value);

  if (event.target.value.length < 1) {
    valid = true;
  }

  if (inputPhoneError === true) {
    if (valid === true) {
      inputPhoneError = false;
      inputPhone.parentElement.classList.remove("customer-form_error");
      phoneTextError.textContent = "";
    } else {
      inputPhoneError = true;
      inputPhone.parentElement.classList.add("customer-form_error");
      phoneTextError.textContent = "Формат: +9 999 999 99 99";
    }
  }
});

inputPhone.addEventListener("paste", (event) => {
  event.preventDefault();
  let paste = (event.clipboardData || window.clipboardData).getData("text");

  let digits = paste.replace(/[^0-9]/g, "");
  event.target.value = `+${digits[0]} ${digits.slice(1, 4)} ${digits.slice(
    4,
    7
  )} ${digits.slice(7, 9)} ${digits.slice(9)}`;
});

inputPhone.addEventListener("focusout", function (event) {
  if (event.target.value.length) {
    const valid = checkValid(event.target.value);
    if (valid === true) {
      inputPhoneError = false;
      inputPhone.parentElement.classList.remove("customer-form_error");
      phoneTextError.textContent = "";
    } else {
      inputPhoneError = true;
      inputPhone.parentElement.classList.add("customer-form_error");
      phoneTextError.textContent = "Формат: +9 999 999 99 99";
    }
    FORM_DATA.phone.value = !inputPhoneError ? event.target.value.replace(/[^0-9]/g, "") : "";
    console.log(inputPhoneError + "FOCUS_OUT");
  }
});
