const inputName = document.querySelector(
  ".customer-form__name"
).firstElementChild;
const inputSurName = document.querySelector(
  ".customer-form__surname"
).firstElementChild;
const inputEmail = document.querySelector(
  ".customer-form__email"
).firstElementChild;
const inputPhone = document.querySelector(
  ".customer-form__phone"
).firstElementChild;
const inputTax = document.querySelector(
  ".customer-form__tax-id"
).firstElementChild;

// Input listeners end
inputEmail.addEventListener("focusout", (event) => {
  const valid = mailRegExp.test(event.target.value);
});
