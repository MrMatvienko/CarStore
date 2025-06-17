import { addNewCar } from "../../API/api";
export function newCar() {
  const form = document.querySelector(".form_add-car");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", document.getElementById("title-car").value.trim());
    formData.append("price", document.getElementById("price").value);
    formData.append("brand", document.getElementById("brand").value.trim());
    formData.append("mileage", document.getElementById("mileage").value);
    formData.append("year", document.getElementById("year").value);

    const imageInput = document.getElementById("images");
    const imageFiles = imageInput.files;

    if (imageFiles.length === 0) {
      alert("Select one or more car photos!");
      return;
    }

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("images", imageFiles[i]);
    }

    try {
      await addNewCar(formData);
      alert("Succes add new car!");
      form.reset();
    } catch (err) {
      alert("Sorry add error");
    }
  });
}
