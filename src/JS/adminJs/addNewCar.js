import { addNewCar } from "../../API/api";
export function newCar() {
  const form = document.querySelector(".form_add-car");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const carData = {
      title: document.getElementById("title-car").value.trim(),
      price: +document.getElementById("price").value,
      brand: document.getElementById("brand").value.trim(),
      mileage: +document.getElementById("mileage").value,
      year: +document.getElementById("year").value,
    };

    try {
      await addNewCar(carData);
      alert("Авто успішно додано!");
      form.reset();
    } catch (err) {
      alert("Сталася помилка при додаванні авто.");
    }
  });
}
