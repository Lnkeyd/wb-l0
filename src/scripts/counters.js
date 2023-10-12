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

plus.forEach((item) =>
  item.addEventListener("click", () => {
    const value = Number(item.previousElementSibling.textContent);

    const productLeft = item.parentElement.nextElementSibling.firstElementChild;

    if (
      !!productLeft?.textContent === true &&
      Number(productLeft.textContent) === 0
    )
      return;

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

    withoutSale.textContent = Math.floor(
      Number(oldPriceItemValue) / value +
        Number(withoutSale.textContent.replace(/[^0-9]/g, ""))
    ).toLocaleString();

    const newPriceItem =
      item.parentElement.parentElement.previousElementSibling
        .previousElementSibling.firstElementChild;

    const oldPriceItem =
      item.parentElement.parentElement.previousElementSibling
        .previousElementSibling.lastElementChild.firstElementChild;

    // Со скидкой
    newPriceItem.textContent = Math.floor(
      Number(newPriceItemValue) / value + Number(newPriceItemValue)
    ).toLocaleString();

    // Без скидки
    oldPriceItem.textContent = Math.floor(
      Number(oldPriceItemValue) / value + Number(oldPriceItemValue)
    );

    // Количество
    itemsCount.textContent = Number(itemsCount.textContent) + 1;
    finalPrice.textContent = Math.floor(
      Number(finalPrice.textContent.replace(/[^0-9]/g, "")) +
        Number(newPriceItemValue) / value
    ).toLocaleString();

    item.previousElementSibling.textContent = value + 1;
    console.log(item.previousElementSibling);

    sale.textContent = (
      (Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
        Number(finalPrice.textContent.replace(/[^0-9]/g, ""))) *
      -1
    ).toLocaleString();

    // Прибавили счётчик = продуктов на складе стало на 1 меньше
    if (!!productLeft?.textContent)
      productLeft.textContent = Number(productLeft.textContent) - 1;
    //Обновление количества товаров на иконкe корзины
    
  })
);

minus.forEach((item) =>
  item.addEventListener("click", () => {
    const value = Number(item.nextElementSibling.textContent);
    if (value > 1) {
      // Основной текст

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
      console.log(oldPriceItemValue);

      withoutSale.textContent = Math.floor(
        Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
          Number(oldPriceItemValue) / value
      ).toLocaleString();

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

      // Количество
      itemsCount.textContent = Number(itemsCount.textContent) - 1;

      finalPrice.textContent = Math.floor(
        Number(finalPrice.textContent.replace(/[^0-9]/g, "")) -
          Number(newPriceItemValue) / value
      ).toLocaleString();

      item.nextElementSibling.textContent = value - 1;

      sale.textContent = (
        (Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
          Number(finalPrice.textContent.replace(/[^0-9]/g, ""))) *
        -1
      ).toLocaleString();

      // Убавили счётчик = продуктов на складе стало на 1 больше
      if (!!productLeft?.textContent)
        productLeft.textContent = Number(productLeft.textContent) + 1;
      // Конец основного текста
    }
  })
);
