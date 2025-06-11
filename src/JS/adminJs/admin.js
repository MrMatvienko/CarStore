import { newCar } from "./addNewCar";
import { deleteSoldCar } from "./deleteCar";

document.addEventListener("DOMContentLoaded", () => {
  newCar();
  deleteSoldCar();
});
