import { getAllCars } from "../API/api";

export function getSelectList() {
  const container = document.querySelector(".car_checkbox-list");
  function createCheckBox(car) {
    const li = document.createElement("li");
    li.classList.add("chekbox-item");

    li.innerHTML = `
    <div class="check_box-custom">
    <div class="check_box-checked"></div>
    </div>
    <p class="check_box-text">${car.brand}</p>
    `;
    return li;
  }

  async function renderCheckBox() {
    try {
      const cars = await getAllCars();
      cars.forEach((car) => {
        const item = createCheckBox(car);
        container.appendChild(item);
      });
    } catch (error) {
      container.innerHTML = "<li> Sorry, brand dont find </li>";
    }
  }
  renderCheckBox();
}
