import { getAllBrands } from "../API/api";
import { useFillter } from "./fillter";
// let isFilterInitialized = false;

export function getSelectList() {
  const container = document.querySelector(".car_checkbox-list");

  async function renderCheckBox() {
    try {
      container.innerHTML = "";

      const brands = await getAllBrands();
      const uniqueBrands = [...new Set(brands)];

      uniqueBrands.forEach((brand) => {
        const item = document.createElement("li");
        item.classList.add("chekbox-item");
        item.innerHTML = `
          <div class="check_box-custom">
            <div class="check_box-checked"></div>
          </div>
          <p class="check_box-text">${brand}</p>
        `;
        container.appendChild(item);
      });
      // if (!isFilterInitialized) {
      //   isFilterInitialized = true;
      // }
      useFillter();
    } catch (error) {
      container.innerHTML = "<li> Вибачте, бренди не знайдено </li>";
    }
  }

  renderCheckBox();
}
