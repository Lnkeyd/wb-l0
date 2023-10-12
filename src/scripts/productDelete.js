// Удаление продукта

function updateCartCount() {
  const cartCounts = document.querySelectorAll(".cart-count");
    cartCounts.forEach(item => item.textContent = document.querySelectorAll(".cart-product").length)
}

function updateMissingCount() {
    const missingItems = document.querySelector('.missing-container__title-count')

    missingItems.textContent = document.querySelectorAll(".cart-product").length;
}

const deleteProductButtons = document.querySelectorAll(
  ".product-buttons-wrap-icons__delete"
);

deleteProductButtons.forEach((item) =>
  item.addEventListener("click", () => {
    const targetProduct = document.querySelector(`#${item.dataset.parentId}`);
    const missingProduct = document.querySelector(`#${item.dataset.missingId}`)
    const productCards = document.querySelectorAll(`.${item.dataset.productCard}`)

    const productPrice = document.querySelector(`#${item.dataset.priceValue}`);
    const productOldPrice = document.querySelector(
      `#${item.dataset.oldPriceValue}`
    );

    console.log(finalPrice, productPrice);

    finalPrice.textContent = (
      Number(finalPrice.textContent.replace(/[^0-9]/g, "")) -
      Number(productPrice.textContent.replace(/[^0-9]/g, ""))
    ).toLocaleString();

    withoutSale.textContent = (
      Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
      Number(productOldPrice.textContent.replace(/[^0-9]/g, ""))
    ).toLocaleString();

    sale.textContent = (
      (Number(withoutSale.textContent.replace(/[^0-9]/g, "")) -
        Number(finalPrice.textContent.replace(/[^0-9]/g, ""))) *
      -1
    ).toLocaleString();

    // Удаляем картинку из карточек товаров
    productCards.forEach(card => card.remove());


    targetProduct.remove();
    missingProduct.remove()
    updateCartCount();
    updateMissingCount()
  })
);
