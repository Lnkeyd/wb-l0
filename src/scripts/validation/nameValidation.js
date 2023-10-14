const inputName = document.querySelector(
  ".customer-form__name"
).firstElementChild;

const nameTextError = document.querySelector("#name-error");

// Input listeners start
inputName.addEventListener("keyup", function (event) {
    if (event.target.value.length > 0) {
        nameTextError.textContent = "";
        inputName.parentElement.classList.remove("customer-form_error");
    }
});

inputName.addEventListener("focusout", function (event) {
  if (event.target.value.length) {

    FORM_DATA.name.value = event.target.value
  }
});