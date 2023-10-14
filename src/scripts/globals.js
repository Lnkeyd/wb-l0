var FINAL_PRICE = 2101063;
var OLD_PRICE = 2302048;
var PRICE_CURR = "сом";

var FORM_DATA = {
  name: {
    value: "",
    formContainerSelector: ".customer-form__name",
    errorSelector: "#name-error",
    blankErrorText: "Укажите имя",
  },
  surname: {
    value: "",
    formContainerSelector: ".customer-form__surname",
    errorSelector: "#surname-error",
    blankErrorText: "Введите фамилию",
  },
  email: {
    value: "",
    formContainerSelector: ".customer-form__email",
    errorSelector: "#email-error",
    blankErrorText: "Укажите электронную почту",
  },
  phone: {
    value: "",
    formContainerSelector: ".customer-form__phone",
    errorSelector: "#phone-error",
    blankErrorText: "Укажите номер телефона",
  },
  taxId: {
    value: "",
    formContainerSelector: ".customer-form__tax-id",
    errorSelector: "#tax-error",
    blankErrorText: "Укажите ИНН",
    infoSelector: "#customer-form__tax-info",
  },
};
