import { getAllCars } from "../API/api";
import { buyContact } from "./modal-contact";

let currentPage = 1;
const limit = 6;
let isLastPage = false;
let selectedBrand = null;

const moreBtn = document.querySelector(".car_more-btn");
const container = document.querySelector(".car_list-wrapper");

export function setSelectedBrand(brand) {
  selectedBrand = brand;
}
export function getSelectedBrand() {
  return selectedBrand;
}

function createCarCard(car) {
  const li = document.createElement("li");
  li.classList.add("car-card");

  li.innerHTML = `
    <img class="car_img" src="${car.images[0].url}" alt="${car.title}" />
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
      <p class="car_info-article">#${car.article}</p>
    </div>
  `;
  return li;
}

export async function loadCars() {
  if (isLastPage || !container) return;

  try {
    const cars = await getAllCars({
      page: currentPage,
      limit,
      brand: getSelectedBrand(),
    });

    if (cars.length < limit) {
      isLastPage = true;
      moreBtn.style.display = "none";
    }

    cars.forEach((car) => {
      const item = createCarCard(car);
      container.appendChild(item);
    });

    buyContact();
    currentPage += 1;
  } catch (error) {
    console.error("Error loading cars:", error);
    container.innerHTML = "<li>Sorry, database is not working!</li>";
  }
}

export async function renderCarsList() {
  if (!container) {
    console.error("Sorry car list not found!");
    return;
  }

  container.innerHTML = "";
  currentPage = 1;
  isLastPage = false;
  moreBtn.style.display = "block";
}

moreBtn.addEventListener("click", loadCars);
renderCarsList().then(() => loadCars());
