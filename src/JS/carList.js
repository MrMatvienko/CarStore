import { getAllCars } from "../API/api";
import { buyContact } from "./modal-contact";
import { getSelectList } from "./select-list";

function createCarCard(car) {
  const li = document.createElement("li");
  li.classList.add("car-card");

  li.innerHTML = `
    <img class="car_img" src="${car.images[0].url}" alt="auto" />
    <div class="car_info">
      <div class="car_item-text">
        <h3 class="car_info-title">${car.title}</h3>
        <p class="car_info-price">$${car.price}</p>
        <div class="car_info-subtext">
          <div class="car_info-subwrapper">
            <p class="car_info-text">Release date</p>
            <p class="car_info-text text-color">${car.year}</p>
          </div>
          <div class="car_info-subwrapper">
            <p class="car_info-text">Mileage</p>
            <p class="car_info-text text-color">${car.mileage} mi</p>
          </div>
        </div>
      </div>
      <button class="car_list-btn">Get it!</button>
      <p class="car_info-article">#${car.article}<p/>
    </div>
  `;

  return li;
}

export async function renderCarsList() {
  const container = document.querySelector(".car_list-wrapper");
  if (!container) {
    console.error("Element '.car_list-wrapper' dont find.");
    return;
  }
  container.innerHTML = "";

  try {
    const cars = await getAllCars();
    cars.forEach((car) => {
      const item = createCarCard(car);
      container.appendChild(item);
    });
    buyContact();
    getSelectList();
  } catch (error) {
    console.error("Error render car:", error);
    container.innerHTML = "<li>Sorry, data base dont working!</li>";
  }
}
