const inputName = document.querySelector(
  ".customer-form__name"
).firstElementChild;

const nameTextError = document.querySelector("#name-error");

// Input listeners start
inputName.addEventListener("keyup", function (event) {
    if (event.target.value.length < 1) {
        nameTextError.textContent = "";
    }
});

inputName.addEventListener("focusout", function (event) {
  if (event.target.value.length) {

    FORM_DATA.name = event.target.value
  }
});