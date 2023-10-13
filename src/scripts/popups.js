import { companies } from "../data/companies.js";

const infos = document.querySelectorAll(".product-description-company__info");

infos.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    let popup = document.createElement("div");
    const company = companies.find((item) => item.id === icon.dataset.infoId);
    if (!company) return;

    popup.className = "product-description-company-popup";
    popup.innerHTML = `
                      <div class="product-description-company-popup__title">
                        ${company.title}
                      </div>
                      <div class="product-description-company-popup__reg">
                        ${company.register}
                      </div>
                      <div class="product-description-company-popup__address">
                        ${company.address}
                      </div>
      
      `;

    icon.after(popup);
  });
});

const deliveryFreeInfo = document.querySelector(".delivery-ship-info");

const deliveryCheckoutInfo = document.querySelector(".checkout-info");

// Элемент в "Способ доставки"
deliveryFreeInfo.addEventListener("mouseenter", () => {
  let popup = document.createElement("div");
  popup.className = "delivery-popup";
  popup.textContent =
    "Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно";

  popup.style = `
        bottom: -62px;
        right: 50%;
        transform: translateX(50%);`;

  deliveryFreeInfo.append(popup);
});

deliveryFreeInfo.addEventListener("mouseleave", () => {
  deliveryFreeInfo.lastElementChild.remove();
});

// Элемент в "Итого"

deliveryCheckoutInfo.lastElementChild.lastElementChild.addEventListener(
  "mouseenter",
  () => {
    console.log("ENTERED");
    let popup = document.createElement("div");
    popup.className = "delivery-popup";
    popup.textContent =
      "Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно";

    popup.style = `
        bottom: -50px;
        right: 50%;
        transform: translateX(50%);`;

    deliveryCheckoutInfo.append(popup);
  }
);

deliveryCheckoutInfo.lastElementChild.lastElementChild.addEventListener(
  "mouseleave",
  () => {
    deliveryCheckoutInfo.lastElementChild.remove();
  }
);
