import { updateInstantPayButton, updateTitlePrice } from "./counters.js";

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

function updateCheckoutCount() {
  const checkout = document.querySelector(
    ".checkout-without-sale__title-count"
  );
  checkout.textContent = document.querySelectorAll(".cart-product").length;
}

function updateAccordeonTitleCount() {
  const accordeonTitle = document.querySelector(".cart-container-title__count");
  accordeonTitle.textContent =
    document.querySelectorAll(".cart-product").length;
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

const deleteProductButtons = document.querySelectorAll(
  ".product-buttons-wrap-icons__delete"
);

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

    console.log(finalPrice, productPrice);

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

    // Удаляем картинку из карточек товаров
    productCards.forEach((card) => card.remove());

    targetProduct.remove();
    missingProduct.remove();
    updateAllCount();
    updateInstantPayButton()
    updateTitlePrice()
  })
);
