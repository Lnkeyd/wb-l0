import { updateAccordeonTitleCount } from "./productDelete.js";

const minus = document.querySelectorAll(".product-buttons-wrap-counter__minus");
const count = document.querySelectorAll(".product-buttons-wrap-counter__count");
const plus = document.querySelectorAll(".product-buttons-wrap-counter__plus");

const finalPrice = document.querySelector(".checkout-with-sale__value-sum");
const withoutSale = document.querySelector(".checkout-without-sale__value-sum");
const sale = document.querySelector(".checkout-sale__value-sum");

const itemsCount = document.querySelector(
  ".checkout-without-sale__title-count"
);

// Регулярка для очистки строки
// оставляем только числа
// .replace(/[^0-9]/g,"")

export function updateInstantPayButton() {
  const payCheckbox = document.querySelector("#instant-pay__input");
  const payButton = document.querySelector(".instant-pay__button");

  if (payCheckbox.checked) {
    payButton.textContent = `Оплатить ${FINAL_PRICE.toLocaleString()} ${PRICE_CURR}`;
  }
}

export function updateTitlePrice() {
  const titlePriceValue = document.querySelector(
    ".cart-container-title__price-value"
  );
  titlePriceValue.textContent = FINAL_PRICE.toLocaleString();
}

plus.forEach((item) =>
  item.addEventListener("click", () => {
    const checkbox = document.querySelector(`#${item.dataset.checkId}`);

    const value = Number(item.previousElementSibling.textContent);

    const productLeft = item.parentElement.nextElementSibling.firstElementChild;

    if (
      !!productLeft?.textContent === true &&
      Number(productLeft.textContent) === 0
    )
      return;

    // Увеличиваем Counter
    item.previousElementSibling.textContent = value + 1;
    // суммарная цена за один товар
    const newPriceItemValue = Number(
      item.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent.replace(
        /[^0-9]/g,
        ""
      )
    );

    // старая суммарная цена (была бы без скидки)
    const oldPriceItemValue =
      item.parentElement.parentElement.previousElementSibling.previousElementSibling.lastElementChild.textContent.replace(
        /[^0-9]/g,
        ""
      );

    const newPriceItem =
      item.parentElement.parentElement.previousElementSibling
        .previousElementSibling.firstElementChild;

    const oldPriceItem =
      item.parentElement.parentElement.previousElementSibling
        .previousElementSibling.lastElementChild.firstElementChild;

    // Цена по одному товару со скидкой
    newPriceItem.textContent = Math.floor(
      Number(newPriceItemValue) / value + Number(newPriceItemValue)
    ).toLocaleString();

    // Цена по одному товару без скидки
    oldPriceItem.textContent = Math.floor(
      Number(oldPriceItemValue) / value + Number(oldPriceItemValue)
    );

    if (checkbox.checked) {
      // Количество
      itemsCount.textContent = Number(itemsCount.textContent) + 1;

      // ВСЯ цена БЕЗ скидки (В Итого)
      OLD_PRICE = Math.floor(
        Number(oldPriceItemValue) / value +
          Number(withoutSale.textContent.replace(/[^0-9]/g, ""))
      );

      withoutSale.textContent = OLD_PRICE.toLocaleString();

      // ВСЯ цена со скидкой (В Итого)
      FINAL_PRICE = Math.floor(
        Number(finalPrice.textContent.replace(/[^0-9]/g, "")) +
          Number(newPriceItemValue) / value
      );

      finalPrice.textContent = FINAL_PRICE.toLocaleString();

      sale.textContent = ((OLD_PRICE - FINAL_PRICE) * -1).toLocaleString();

      // Если чекбокс "Оплатить сразу" прожат
      updateInstantPayButton();

      // Если аккордеон свёрнут
      updateTitlePrice();
      updateAccordeonTitleCount();
    }

    // Прибавили счётчик = продуктов на складе стало на 1 меньше
    if (!!productLeft?.textContent)
      productLeft.textContent = Number(productLeft.textContent) - 1;
  })
);

minus.forEach((item) =>
  item.addEventListener("click", () => {
    const checkbox = document.querySelector(`#${item.dataset.checkId}`);

    const value = Number(item.nextElementSibling.textContent);
    if (value > 1) {
      // Основной текст
      item.nextElementSibling.textContent = value - 1;

      const productLeft =
        item.parentElement.nextElementSibling.firstElementChild;

      // суммарная цена за один товар
      const newPriceItemValue = Number(
        item.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent.replace(
          /[^0-9]/g,
          ""
        )
      );

      // старая суммарная цена (была бы без скидки)
      const oldPriceItemValue =
        item.parentElement.parentElement.previousElementSibling.previousElementSibling.lastElementChild.textContent.replace(
          /[^0-9]/g,
          ""
        );

      const newPriceItem =
        item.parentElement.parentElement.previousElementSibling
          .previousElementSibling.firstElementChild;

      const oldPriceItem =
        item.parentElement.parentElement.previousElementSibling
          .previousElementSibling.lastElementChild.firstElementChild;

      // Со скидкой
      newPriceItem.textContent = Math.floor(
        Number(newPriceItemValue) - Number(newPriceItemValue) / value
      ).toLocaleString();

      // Без скидки
      oldPriceItem.textContent = Math.floor(
        Number(oldPriceItemValue) - Number(oldPriceItemValue) / value
      );

      if (checkbox.checked) {
        // Количество
        itemsCount.textContent = Number(itemsCount.textContent) - 1;

        // ВСЯ цена БЕЗ скидки (В Итого)

        OLD_PRICE = Math.floor(
          Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
            Number(oldPriceItemValue) / value
        );

        withoutSale.textContent = OLD_PRICE.toLocaleString();

        // ВСЯ цена со скидкой (В Итого)

        FINAL_PRICE = Math.floor(
          Number(finalPrice.textContent.replace(/[^0-9]/g, "")) -
            Number(newPriceItemValue) / value
        );

        finalPrice.textContent = FINAL_PRICE.toLocaleString();

        sale.textContent = ((OLD_PRICE - FINAL_PRICE) * -1).toLocaleString();

        // Если чекбокс "Оплатить сразу" прожат
        updateInstantPayButton();

        // Если аккордеон свёрнут
        updateTitlePrice();
        updateAccordeonTitleCount();
      }

      // Убавили счётчик = продуктов на складе стало на 1 больше
      if (!!productLeft?.textContent)
        productLeft.textContent = Number(productLeft.textContent) + 1;
    }
  })
);
