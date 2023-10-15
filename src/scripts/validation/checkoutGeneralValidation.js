import { detectDeviceType } from "../utils/detectDeviceType.js";

const button = document.querySelector(".instant-pay__button");

button.addEventListener("click", () => {
  let flag = true;
  for (let key in FORM_DATA) {
    if (FORM_DATA[key].value === "") {
      flag = false;
      const formContainerEl = document.querySelector(
        FORM_DATA[key].formContainerSelector
      );

      const formInputEl = formContainerEl.firstElementChild;
      const errorEl = document.querySelector(FORM_DATA[key].errorSelector);
      const infoEl = document.querySelector(FORM_DATA[key].infoSelector);

      formContainerEl.classList.add("customer-form_error");
      if (infoEl) {
        infoEl.style = "display: none;";
      }
      errorEl.textContent = FORM_DATA[key].blankErrorText;
    }
  }
  if (flag === true) {
    alert("Данные успешно отправлены!");
  }
  if (detectDeviceType() === 'Mobile') {
    button.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
});
