import { deleteCar } from "../../API/api";

export function deleteSoldCar() {
  const form = document.querySelector(".form_delete");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const article = document.getElementById("article").value.trim();

    try {
      await deleteCar(article);
      console.log("SUCCESS");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  });
}
