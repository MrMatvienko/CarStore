import { sliderGallery } from "./slider-gallery";

export function openGallery() {
  const carImgs = document.querySelectorAll(".car_img");
  const close = document.querySelector(".close_gallery");
  const modalGallery = document.querySelector(".car_img-gallery");
  const galleryList = document.querySelector(".img_gallery");
  const galleryTitle = modalGallery.querySelector("h3");

  if (carImgs.length > 0) {
    carImgs.forEach((img) =>
      img.addEventListener("click", () => {
        const images = JSON.parse(img.dataset.images || "[]");
        const title = img.dataset.title || "";

        galleryList.innerHTML = "";

        images.forEach((image) => {
          const li = document.createElement("li");
          li.classList.add("car_gallery-item");
          const imageTag = document.createElement("img");
          imageTag.src = image.url;
          imageTag.alt = title;
          li.appendChild(imageTag);
          galleryList.appendChild(li);
        });

        galleryTitle.textContent = title;

        modalGallery.classList.add("open");
        sliderGallery();
      })
    );

    if (close) {
      close.addEventListener("click", () => {
        modalGallery.classList.remove("open");
        galleryList.innerHTML = "";
      });
    }
    modalGallery.addEventListener("click", (event) => {
      if (event.target === modalGallery) {
        closeGallery();
      }
    });

    function closeGallery() {
      modalGallery.classList.remove("open");
      galleryList.innerHTML = "";
    }
  }
}
