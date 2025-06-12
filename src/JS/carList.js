import { getAllCars } from "../API/api";

export function carList() {
  const container = document.querySelector(".car_list-wrapper");
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
  async function renderCars() {
    try {
      const cars = await getAllCars();
      cars.forEach((car) => {
        const item = createCarCard(car);
        container.appendChild(item);
      });
      console.log(cars);
    } catch (error) {
      container.innerHTML = "<li>Не вдалося завантажити список авто.</li>";
    }
  }
  renderCars();
}
