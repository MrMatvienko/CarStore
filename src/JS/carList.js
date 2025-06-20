import { getAllCars } from "../API/api";
import { openGallery } from "./gallery-open";
import { buyContact } from "./modal-contact";

const translations = {
  en: {
    releaseDate: "Release date",
    mileage: "Mileage",
    getIt: "Get it!",
  },
  es: {
    releaseDate: "Fecha de lanzamiento",
    mileage: "Kilometraje",
    getIt: "¡Cómpralo!",
  },
  ru: {
    releaseDate: "Дата выпуска",
    mileage: "Пробег",
    getIt: "Купить!",
  },
};

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
  const path = window.location.pathname;
  let lang = "en";
  if (path.includes("/es/")) lang = "es";
  else if (path.includes("/ru/")) lang = "ru";

  const t = translations[lang];

  const li = document.createElement("li");
  li.classList.add("car-card");

  li.innerHTML = `
    <img class="car_img"
    src="${car.images[0].url}" 
    alt="${car.title}" 
    data-images='${JSON.stringify(car.images)}'  
    data-title="${car.title}" />
    <div class="car_info">
      <div class="car_item-text">
        <h3 class="car_info-title">${car.title}</h3>
        <p class="car_info-price">$${car.price}</p>
        <div class="car_info-subtext">
          <div class="car_info-subwrapper">
            <p class="car_info-text">${t.releaseDate}</p>
            <p class="car_info-text text-color">${car.year}</p>
          </div>
          <div class="car_info-subwrapper">
            <p class="car_info-text">${t.mileage}</p>
            <p class="car_info-text text-color">${car.mileage} mi</p>
          </div>
        </div>
      </div>
      <button class="car_list-btn">${t.getIt}</button>
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
    openGallery();
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
