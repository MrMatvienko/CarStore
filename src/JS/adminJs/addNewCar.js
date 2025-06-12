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

    // Зміни для завантаження кількох файлів
    const imageInput = document.getElementById("images"); // Отримуємо інпут за ID 'images'
    const imageFiles = imageInput.files; // Це FileList, що містить всі вибрані файли

    if (imageFiles.length === 0) {
      alert("Будь ласка, виберіть хоча б одне зображення.");
      return;
    }

    // Перебираємо FileList і додаємо кожен файл окремо до FormData
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("images", imageFiles[i]); // Зверніть увагу: ім'я поля 'images'
    }

    try {
      await addNewCar(formData);
      alert("Авто успішно додано!");
      form.reset();
    } catch (err) {
      alert("Сталася помилка при додаванні авто.");
    }
  });
}
