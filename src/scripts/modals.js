const deliveryPoint = document.querySelector(".delivery-point__address");
const deliveryChangeButton = document.querySelector(".delivery-change-button");

let scrollY = 0;
const deliveryModalClose = document.querySelector(
  ".modal-delivery-header__close"
);
const deliverySubmit = document.querySelector(".modal-delivery-submit");

const paymentModalClose = document.querySelector(
  ".modal-payment-header__close"
);
const paymentChangeButton = document.querySelector(".payment-header__change");

// Delivery event listeners
deliveryChangeButton.addEventListener("click", (e) => {
  scrollY = window.scrollY;

  document.querySelector("body").classList.add("modal_active");
  document.body.style.position = "fixed";

  document
    .querySelector(".modal-delivery")
    .classList.add("modal-delivery_active");
});

deliveryModalClose.addEventListener("click", (e) => {
  document.body.style.position = "static";
  document.body.classList.remove("modal_active");
  document
    .querySelector(".modal-delivery")
    .classList.remove("modal-delivery_active");

  window.scrollTo(0, scrollY);
});

deliverySubmit.addEventListener("click", (e) => {
  document.body.style.position = "static";
  document.body.classList.remove("modal_active");
  document
    .querySelector(".modal-delivery")
    .classList.remove("modal-delivery_active");

  window.scrollTo(0, scrollY);
});

// Payment event listeners
paymentChangeButton.addEventListener("click", (e) => {
  scrollY = window.scrollY;

  document.querySelector("body").classList.add("modal_active");
  document.body.style.position = "fixed";

  document
    .querySelector(".modal-payment")
    .classList.add("modal-payment_active");
});

paymentModalClose.addEventListener("click", (e) => {
  document.body.style.position = "static";
  document.body.classList.remove("modal_active");
  document
    .querySelector(".modal-payment")
    .classList.remove("modal-payment_active");

  window.scrollTo(0, scrollY);
});

const paymentSubmit = document.querySelector(".modal-payment-submit");

paymentSubmit.addEventListener("click", (e) => {
  document.body.style.position = "static";
  document.body.classList.remove("modal_active");
  document
    .querySelector(".modal-payment")
    .classList.remove("modal-payment_active");

  window.scrollTo(0, scrollY);
});

// Radio buttons handle
const addresses = document.querySelectorAll(".modal-delivery-form-item");

const deliveryRadios = document.querySelectorAll(".modal-delivery__radio");
for (item of deliveryRadios) {
  item.addEventListener("change", function () {
    deliveryPoint.textContent = this.value;
    document.querySelector(".delivery-point__title").textContent =
      "Пункт выдачи";
  });
}

const cardNumber = document.querySelector(".payment-card__number");
const cardImage = document.querySelector(".payment-card-image");

// Card radio buttons handle
const cards = document.querySelectorAll(".modal-payment-item");

const paymentRadios = document.querySelectorAll(".modal-payment__radio");
for (item of paymentRadios) {
  item.addEventListener("change", function () {
    cardNumber.textContent = this.value;
    console.log(this.nextElementSibling.nextElementSibling.firstElementChild);
    document.querySelector(".payment-card-image").src =
      this.nextElementSibling.nextElementSibling.firstElementChild.src;
  });
}

// delete handle
document.querySelectorAll(".modal-item-delete").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.remove();
  });
});

// Point and Courier radio buttons

const pointButton = document.querySelector(".modal-delivery__point");
const courierButton = document.querySelector(".modal-delivery__courier");

courierButton.addEventListener("click", () => {
  courierButton.classList.add("modal-delivery__button_active");
  pointButton.classList.remove("modal-delivery__button_active");
  document
    .querySelector(".modal-delivery-courier-items")
    .classList.add("modal-delivery-courier-items_active");
  document
    .querySelector(".modal-delivery-point-items")
    .classList.remove("modal-delivery-point-items_active");
});

pointButton.addEventListener("click", () => {
  pointButton.classList.add("modal-delivery__button_active");
  courierButton.classList.remove("modal-delivery__button_active");
  document
    .querySelector(".modal-delivery-point-items")
    .classList.add("modal-delivery-point-items_active");
  document
    .querySelector(".modal-delivery-courier-items")
    .classList.remove("modal-delivery-courier-items_active");
});
