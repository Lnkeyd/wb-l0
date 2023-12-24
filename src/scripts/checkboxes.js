import { updateInstantPayButton, updateTitlePrice } from "./counters.js";
import {
  updateAccordeonTitleCount,
  updateCheckoutCount,
} from "./productDelete.js";
import { sameDateCheck } from "./sameDateCheck.js";
import { updateCheckupPointDates } from "./updateCheckupPointDates.js";

const productCheckboxes = document.querySelectorAll(".product-check-input");
const finalPrice = document.querySelector(".checkout-with-sale__value-sum");
const withoutSale = document.querySelector(".checkout-without-sale__value-sum");
const sale = document.querySelector(".checkout-sale__value-sum");
const itemsCount = document.querySelector(
  ".checkout-without-sale__title-count"
);

const checkAll = document.querySelector(".check-all");

export function checkEmptySameDate() {}

productCheckboxes.forEach((checkbox) => {
  const productWithSale = document.querySelector(
    `#${checkbox.dataset.priceValue}`
  );

  const productWithoutSale = document.querySelector(
    `#${checkbox.dataset.oldPriceValue}`
  );

  const productCount = document.querySelector(
    `#${checkbox.dataset.productCount}`
  );

  // Переменную вынести в отд. ф-цию
  const productItemCount = document.querySelectorAll(
    `.${checkbox.dataset.productItemCount}`
  );

  checkbox.addEventListener("change", () => {
    const productCards = document.querySelectorAll(
      `.${checkbox.dataset.productCard}`
    );

    if (checkbox.checked) {
      productCards.forEach((card) => (card.style = "display: block;"));

      const productItems = document.querySelectorAll(
        ".delivery-products-items"
      );

      productItems[productItems.length - 1].parentElement.style.display =
        "flex";
      updateCheckupPointDates();

      // Обновляем товары в способе доставки
      sameDateCheck(checkbox);

      finalPriceGlobal += Math.floor(
        Number(productWithSale.textContent.replace(/[^0-9]/g, ""))
      );

      oldPriceGlobal += Math.floor(
        Number(productWithoutSale.textContent.replace(/[^0-9]/g, ""))
      );

      finalPrice.textContent = finalPriceGlobal.toLocaleString();
      withoutSale.textContent = oldPriceGlobal.toLocaleString();

      sale.textContent = (
        (oldPriceGlobal - finalPriceGlobal) *
        -1
      ).toLocaleString();
      itemsCount.textContent = (
        Number(itemsCount.textContent.replace(/[^0-9]/g, "")) +
        Number(productCount.textContent.replace(/[^0-9]/g, ""))
      ).toLocaleString();

      updateInstantPayButton();
      updateTitlePrice();
      updateAccordeonTitleCount();
      updateCheckoutCount();
    } else {
      checkAll.checked = false;

      productCards.forEach((card) => (card.style = "display: none;"));
      const productItems = document.querySelectorAll(
        ".delivery-products-items"
      );

      if (!productItems[productItems.length - 1].length) {
        productItems[productItems.length - 1].parentElement.style.display =
          "none";
        updateCheckupPointDates();
      }

      finalPriceGlobal -= Math.floor(
        Number(productWithSale.textContent.replace(/[^0-9]/g, ""))
      );

      oldPriceGlobal -= Math.floor(
        Number(productWithoutSale.textContent.replace(/[^0-9]/g, ""))
      );

      finalPrice.textContent = finalPriceGlobal.toLocaleString();
      withoutSale.textContent = oldPriceGlobal.toLocaleString();
      sale.textContent = (
        (oldPriceGlobal - finalPriceGlobal) *
        -1
      ).toLocaleString();
      itemsCount.textContent = (
        Number(itemsCount.textContent.replace(/[^0-9]/g, "")) -
        Number(productCount.textContent.replace(/[^0-9]/g, ""))
      ).toLocaleString();

      updateInstantPayButton();
      updateTitlePrice();
      updateAccordeonTitleCount();
      updateCheckoutCount();
    }
  });
});

checkAll.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll(".product-check-input");
  if (checkAll.checked) {
    checkboxes.forEach((check) => {
      if (!check.checked) {
        check.checked = true;
        const event = new Event("change");
        check.dispatchEvent(event);
      }
    });
  } else {
    checkboxes.forEach((check) => {
      if (check.checked) {
        check.checked = false;
        const event = new Event("change");
        check.dispatchEvent(event);
      }
    });
  }
});
