const inputSurname = document.querySelector(
    ".customer-form__surname"
  ).firstElementChild;
  
  const surnameTextError = document.querySelector("#surname-error");
  
  // Input listeners start
  inputSurname.addEventListener("keyup", function (event) {
      if (event.target.value.length < 1) {
          surnameTextError.textContent = "";
      }
  });
  
  inputSurname.addEventListener("focusout", function (event) {
    if (event.target.value.length) {
  
      FORM_DATA.name = event.target.value
    }
  });