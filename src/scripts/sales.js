const oldPrices = document.querySelectorAll(".product__price_old");
import { sales } from "../data/sales.js";

oldPrices.forEach((price) => {
  let popup = document.createElement("div");
  price.addEventListener("mouseover", () => {
    const salePopup = sales.find((item) => item.id === price.dataset.popupId);

    if (!salePopup) return;
    const oldPrice = document.querySelector(
      salePopup.valueSelector
    ).textContent.replace(/[^0-9]/g,"");

    popup.innerHTML = `
        <div class="product__price__sale-popup">
        <div class="product__price__sale-popup-item">
          <div class="product__price__sale-title">Скидка ${
            salePopup.salePercent
          }%</div>
          <div class="product__price__sale-value">-${
            Math.floor(salePopup.saleValue * oldPrice)
          } сом</div>
        </div>
        <div class="product__price__sale-popup-item">
          <div class="product__price__sale-title">Скидка покупателя ${
            salePopup.customerSalePercent
          }%</div>
          <div class="product__price__sale-value">-${
            Math.floor(salePopup.customerSaleValue * oldPrice)
          } сом</div>
        </div>
      </div>
      
      `;

    price.append(popup);
  });

  price.addEventListener("mouseleave", () => {
    popup.remove();
  });
});
