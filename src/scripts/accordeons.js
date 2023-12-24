const cartProducts = document.querySelectorAll(".cart-product");
const cartButton = document.querySelector(".cart__button");
const cartContainer = document.querySelector(".cart-container");
const accordeonHr = document.querySelector(".product-accordeon-hr");
const accordeonTitle = document.querySelector(".cart-container-title");

const missingProducts = document.querySelectorAll(".missing-item");
const missingButton = document.querySelector(".missing__button");
const missingContainer = document.querySelector(".missing-container");
const deliverySection = document.querySelector(".delivery");

cartButton.addEventListener("click", () => {
  cartProducts.forEach((product) => {
    product.classList.toggle("product_hidden");
  });
  cartButton.classList.toggle("accordeon_reversed");
  accordeonHr.classList.toggle("product-accordeon-hr_active");
  accordeonTitle.classList.toggle("cart-container-title_active");
});

// TODO: Добавить класс cart__button_opened

missingButton.addEventListener("click", () => {
  missingProducts.forEach((product) => {
    product.classList.toggle("product_hidden");
  });

  deliverySection.classList.toggle('extra-margin-applied')
  missingContainer.classList.toggle('extra-margin-applied')

  missingButton.classList.toggle("accordeon_reversed");
});