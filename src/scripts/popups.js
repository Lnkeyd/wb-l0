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

const frees = document.querySelectorAll(".delivery-info__text_accent");

console.log(frees);

frees.forEach((text, index) => {
  text.addEventListener("mouseenter", () => {
    let popup = document.createElement("div");
    popup.className = "delivery-popup";
    popup.textContent =
      "Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно";

      if (index === 0) {
        popup.style = `right: 50%;
        transform: translateX(50%);`
      } else {
        popup.style = `right: 50%;
        transform: translateX(22%);`
      }
    text.append(popup);
  });
  text.addEventListener("mouseleave", () => {
    text.firstElementChild.remove();
  });
});
