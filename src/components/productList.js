import { Product } from "./product.js";

export class ProductList {
  constructor(productList) {
    this.productList = productList;
    this.root = document.querySelector(".cart");
  }

  init() {
    this.productList.forEach((item) => {
      const $product = document.createElement("div");
      $product.classList.add("product");
      $product.classList.add("cart-product");
      $product.id = `cart-product-${item.id}`;

      this.root.appendChild($product)

      const productComp = new Product($product, item);
      productComp.render();
    });
  }


}
