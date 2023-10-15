import { updateInstantPayButton, updateTitlePrice } from "./counters.js";
import {
  updateAccordeonTitleCount,
  updateCheckoutCount,
} from "./productDelete.js";

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

  const productItemCount = document.querySelectorAll(
    `.${checkbox.dataset.productItemCount}`
  );

  checkbox.addEventListener("change", () => {
    const productCards = document.querySelectorAll(
      `.${checkbox.dataset.productCard}`
    );

    if (checkbox.checked) {
      productCards.forEach((card) => (card.style = "display: block;"));

      productItemCount.forEach((item, index) => {
        if (index + 1 === productItemCount.length) {
          if (Number(productCount.textContent) > 184) {

            const result = Number(productCount.textContent) - 184;

            item.textContent = result;

            // Убираем видимость продукта, если в той же дате
          } else if (Number(productCount.textContent) === 184) {
            item.parentElement.style = "display: none;";

            productItemCount[index - 1].textContent = productCount.textContent;
          }
        }
      });

      FINAL_PRICE += Math.floor(
        Number(productWithSale.textContent.replace(/[^0-9]/g, ""))
      );

      OLD_PRICE += Math.floor(
        Number(productWithoutSale.textContent.replace(/[^0-9]/g, ""))
      );

      finalPrice.textContent = FINAL_PRICE.toLocaleString();
      withoutSale.textContent = OLD_PRICE.toLocaleString();

      sale.textContent = ((OLD_PRICE - FINAL_PRICE) * -1).toLocaleString();
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

      FINAL_PRICE -= Math.floor(
        Number(productWithSale.textContent.replace(/[^0-9]/g, ""))
      );

      OLD_PRICE -= Math.floor(
        Number(productWithoutSale.textContent.replace(/[^0-9]/g, ""))
      );

      finalPrice.textContent = FINAL_PRICE.toLocaleString();
      withoutSale.textContent = OLD_PRICE.toLocaleString();
      sale.textContent = ((OLD_PRICE - FINAL_PRICE) * -1).toLocaleString();
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
