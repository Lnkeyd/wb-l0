export function sameDateCheck(checkbox) {
  const productItemCount = document.querySelectorAll(
    `.${checkbox.dataset.productItemCount}`
  );

  const productCount = document.querySelector(
    `#${checkbox.dataset.productCount}`
  );

  const productCountNumber = Number(
    productCount.textContent.replace(/[^0-9]/g, "")
  );

  const lastSameDateProduct = productItemCount[productItemCount.length - 1];

  if (productCountNumber > 184) {
    if (productItemCount.length > 1) {
      // Обновляем стейт только последнего элемента
      lastSameDateProduct.textContent = productCountNumber - 184;
    } else {
      const newDateProductItem =
        lastSameDateProduct.parentElement.cloneNode(true);

      //   Если уже есть нода дейта, то просто пушим,
      //   а если нет, то креатим новую дату и потом уже пушим
      const existedNewDate = document.querySelector("#same-date-2");
      if (existedNewDate) {
        existedNewDate.lastElementChild.append(newDateProductItem);
        newDateProductItem.lastElementChild.textContent =
          productCountNumber - 184;
      } else {
        const newDate = document.createElement('div')
        newDate.classList.add('delivery-products-same-date')
        newDate.setAttribute('id', 'same-date-2');
        const oldDate = document.querySelector("#same-date-1");

        newDate.innerHTML = `
            <div class="delivery-products-range">
                <div class="delivery-products-range__start-date">7</div>
                <div class="delivery-products-range__dash">—</div>
                <div class="delivery-products-range__end-date">8</div>
                <div class="delivery-products-range__month">&nbsp;февраля</div>
            </div>
            <div class="delivery-products-item product-card-2">
                  <img
                    class="delivery-products-item__image"
                    src="${lastSameDateProduct.previousElementSibling.src}"
                    alt="delivery product item"
                  />
                  <div
                    class="delivery-products-item__count product-item-count-2"
                  >
                    ${productCountNumber - 184}
                  </div>
            </div>
          `;

        oldDate.after(newDate);
        console.log(newDate.lastElementChild)
        console.log(newDateProductItem)
      }
    }
  } else if (productCountNumber === 184) {
    // Удаляем последний элемент той же даты из DOM
    const sameDateItems = lastSameDateProduct.closest(
      ".delivery-products-items"
    );

    // Если это последний элемент,
    // то удаляем всю доставку на эти даты
    // (7-8 февраля)

    if (sameDateItems.childElementCount === 1) {
      sameDateItems.parentElement.remove();
    } else if (productItemCount.length > 1) {
      lastSameDateProduct.parentElement.remove();
    }

    productItemCount[0].textContent = productCount.textContent;
  } else if (productCountNumber < 184) {
    productItemCount[0].textContent = productCount.textContent;
  }
}
