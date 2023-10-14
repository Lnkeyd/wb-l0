const TAX_ERROR_TEXT = "Проверьте ИНН";

const inputTax = document.querySelector(
  ".customer-form__tax-id"
).firstElementChild;

const taxTextError = document.querySelector("#tax-error");
const taxInfo = document.querySelector("#customer-form__tax-info");

// ERROR FLAGS
let inputTaxError = false;

// Input listeners start
inputTax.addEventListener("keyup", function (event) {
  let value = event.target.value;
  
  event.target.value = value
    .replace(/[^0-9]/g, "")

  let valid = value.length === 14;

  if (value < 1) {
    valid = true;
  }

  if (inputTaxError === true) {
    if (valid === true) {
      taxInfo.style = "display: block;";
      inputTaxError = false;
      inputTax.parentElement.classList.remove("customer-form_error");
      taxTextError.textContent = "";
    } else {
      taxInfo.style = "display: none;";
      inputTaxError = true;
      inputTax.parentElement.classList.add("customer-form_error");
      taxTextError.textContent = TAX_ERROR_TEXT;
    }
  }
});

inputTax.addEventListener("focusout", function (event) {
  if (event.target.value.length) {
    let valid = event.target.value.length === 14;

    if (valid === true) {
      taxInfo.style = "display: block;";
      inputTaxError = false;
      inputTax.parentElement.classList.remove("customer-form_error");
      taxTextError.textContent = "";
    } else {
      taxInfo.style = "display: none;";
      inputTaxError = true;
      inputTax.parentElement.classList.add("customer-form_error");
      taxTextError.textContent = TAX_ERROR_TEXT;
    }
    FORM_DATA.taxId.value = !inputTaxError ? event.target.value : "";
    console.log(inputTaxError + "FOCUS_OUT");
  }
});
