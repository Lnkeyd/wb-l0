export class Product {
  constructor(root, product) {
    this.product = product;
    this.root = root
  }

  update(product) {
    this.product = product
    this.root.innerHTML = ''
    this.render()
  }

  render() {

    this.root.innerHTML = `
            <div class="product__hr first__hr"></div>
            <div class="product-wrapper">
              <div class="product-image-container">
                <img
                  src=${this.product.imageSrc}
                  alt="product image"
                  class="product__image"
                />
                <label class="product__check check-label">
                  <input
                    class="check__input product-check-input"
                    id="product-check-input-${this.product.id}"
                    data-product-card="product-card-${this.product.id}"
                    data-product-count="product-count-${this.product.id}"
                    data-product-item-count="product-item-count-${this.product.id}"
                    data-price-value="product__price-value-${this.product.id}"
                    data-old-price-value="product__price_old-value-${
                      this.product.id
                    }"
                    type="checkbox"
                    ${this.product.isChecked && "checked"}
                  />
                  <span class="check-style"></span>
                </label>
                ${
                  this.product.size
                    ? `
                    <div class="product__size">${this.product.size}</div>
                `
                    : ""
                }
              </div>
              <h4 class="product__price">
                <span class="product__price-value" id="product__price-value-${
                  this.product.id
                }"
                  >${this.product.priceWithSale}</span
                >
                <span class="product__price-currency">сом </span
                ><span class="product__price_old" data-popup-id="${this.product.id}"
                  ><span
                    class="product__price_old-value"
                    id="product__price_old-value-${this.product.id}"
                    >${this.product.oldPrice}</span
                  >
                  сом</span
                >
              </h4>
              <div class="product-description">
                <div class="product-description__title">
                  ${this.product.name}
                </div>
                <div class="product-description__color">
                ${
                  this.product.color
                    ? `
                Цвет: ${this.product.color}
                <span class="product-description__desktop-size"
                  >
                `
                    : ""
                }
                ${
                  this.product.size
                    ? `
                Размер:
                <span class="product-description__desktop-size-value"
                  >${this.product.size}</span></span>
                `
                    : ""
                }
                </div>
                <div class="product-description__stock">${this.product.stock}</div>
                <div class="product-description-company">
                  <div class="product-description-company__text">
                    ${this.product.company}
                  </div>
                  <div
                    class="product-description-company__info"
                    data-info-id="${this.product.id}"
                  >
                    <img src="/public/images/icons/info.svg" alt="info" />
                  </div>
                </div>
              </div>
              <div class="product-buttons-wrap">
                <div class="product-buttons-wrap-counter">
                  <div
                    class="product-buttons-wrap-counter__minus"
                    data-check-id="product-check-input-${this.product.id}"
                  >
                    <img src="/public/images/icons/minus.svg" alt="decrease" />
                  </div>
                  <div
                    class="product-buttons-wrap-counter__count"
                    id="product-count-${this.product.id}"
                  >
                    ${this.product.count}
                  </div>
                  <div
                    class="product-buttons-wrap-counter__plus"
                    data-check-id="product-check-input-${this.product.id}"
                  >
                    <img src="/public/images/icons/plus.svg" alt="increase" />
                  </div>
                </div>
          
                <div class="product-buttons-wrap-items-left">
                  Осталось <span class="items-left-count">${
                    this.product.countOnStock - this.product.count
                  }</span> шт.
                </div>
                <div class="product-buttons-wrap-icons">
                  <div class="product-buttons-wrap-icons__fav">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div
                    class="product-buttons-wrap-icons__delete product-cart__delete"
                    id="product-cart-delete-${this.product.id}"
                    data-check-id="product-check-input-${this.product.id}"
                    data-missing-id="cart-missing-product-${this.product.id}"
                    data-parent-id="cart-product-${this.product.id}"
                    data-price-value="product__price-value-${this.product.id}"
                    data-old-price-value="product__price_old-value-${
                      this.product.id
                    }"
                    data-product-card="product-card-${this.product.id}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            `;
  }
}
