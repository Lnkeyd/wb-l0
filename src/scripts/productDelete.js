import { updateTitlePrice } from "./counters.js";

// Удаление продукта
const finalPrice = document.querySelector(".checkout-with-sale__value-sum");
const withoutSale = document.querySelector(".checkout-without-sale__value-sum");
const sale = document.querySelector(".checkout-sale__value-sum");

function updateCartCount() {
  const cartCounts = document.querySelectorAll(".cart-count");
  cartCounts.forEach(
    (item) =>
      (item.textContent = document.querySelectorAll(".cart-product").length)
  );
}

function updateMissingCount() {
  const missingItems = document.querySelector(
    ".missing-container__title-count"
  );

  missingItems.textContent = document.querySelectorAll(".cart-product").length;
}

export function updateCheckoutCount() {
  const checkout = document.querySelector(
    ".checkout-without-sale__title-count"
  );

  let active = 0;

  const checkboxes = document.querySelectorAll(".product-check-input");
  checkboxes.forEach((check) => {
    const productCount = document.querySelector(
      `#${check.dataset.productCount}`
    );
    if (check.checked) active += Number(productCount.textContent);
  });

  checkout.textContent = active;
}

export function updateAccordeonTitleCount() {
  const accordeonTitle = document.querySelector(".cart-container-title__count");
  // Если нужно считать все товары в корзине, даже нечекнутые
  // accordeonTitle.textContent =
  //   document.querySelectorAll(".cart-product").length;
  const itemsCount = document.querySelector(
    ".checkout-without-sale__title-count"
  );
  accordeonTitle.textContent = itemsCount.textContent;
}

function updateAllCount() {
  // Иконка корзины
  updateCartCount();
  // Отсутствуют N товаров
  updateMissingCount();
  // Итого товаров
  updateCheckoutCount();
  // Аккордеон
  updateAccordeonTitleCount();
}

const deleteProductButtons = document.querySelectorAll(".product-cart__delete");

const deleteMissingButtons = document.querySelectorAll(".missing-cart__delete");

deleteProductButtons.forEach((item) =>
  item.addEventListener("click", () => {
    const targetProduct = document.querySelector(`#${item.dataset.parentId}`);
    const missingProduct = document.querySelector(`#${item.dataset.missingId}`);
    const productCards = document.querySelectorAll(
      `.${item.dataset.productCard}`
    );

    const productPrice = document.querySelector(`#${item.dataset.priceValue}`);
    const productOldPrice = document.querySelector(
      `#${item.dataset.oldPriceValue}`
    );

    const checkbox = document.querySelector(`#${item.dataset.checkId}`);

    if (checkbox.checked) {
      // ИТОГО со скидкой
      FINAL_PRICE =
        Number(finalPrice.textContent.replace(/[^0-9]/g, "")) -
        Number(productPrice.textContent.replace(/[^0-9]/g, ""));

      finalPrice.textContent = FINAL_PRICE.toLocaleString();

      // ИТОГО БЕЗ скидки
      OLD_PRICE =
        Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
        Number(productOldPrice.textContent.replace(/[^0-9]/g, ""));

      withoutSale.textContent = OLD_PRICE.toLocaleString();

      sale.textContent = (
        (Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
          Number(finalPrice.textContent.replace(/[^0-9]/g, ""))) *
        -1
      ).toLocaleString();
    }

    // Удаляем картинку из карточек товаров
    // Эту логику переместить в чекбокс когда его анчекаешь
    productCards.forEach((card) => card.remove());

    targetProduct.remove();
    missingProduct.remove();
    updateCheckoutCount();
    updateCartCount();
    updateMissingCount();
    updateAccordeonTitleCount();
    updateTitlePrice();
  })
);

deleteMissingButtons.forEach((button) => {
  const productButton = document.querySelector(
    `#${button.dataset.productCartDeleteId}`
  );

  button.addEventListener("click", () => {
    const event = new Event("click");
    productButton.dispatchEvent(event);
  });
});
