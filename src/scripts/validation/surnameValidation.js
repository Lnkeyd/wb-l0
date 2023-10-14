const inputSurname = document.querySelector(
  ".customer-form__surname"
).firstElementChild;

const surnameTextError = document.querySelector("#surname-error");

// Input listeners start
inputSurname.addEventListener("keyup", function (event) {
  if (event.target.value.length > 0) {
    surnameTextError.textContent = "";
    inputSurname.parentElement.classList.remove("customer-form_error");
  }
});

inputSurname.addEventListener("focusout", function (event) {
  if (event.target.value.length) {
    FORM_DATA.surname.value = event.target.value;
  }
});
