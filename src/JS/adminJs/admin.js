import { newCar } from "./addNewCar";
import { authControle } from "./auth";
import { deleteSoldCar } from "./deleteCar";

document.addEventListener("DOMContentLoaded", () => {
  authControle();

  const isAuth = localStorage.getItem("admin-auth") === "true";

  if (!isAuth) {
    console.warn("Admin not authenticated");
    return;
  }
  newCar();
  deleteSoldCar();
});
