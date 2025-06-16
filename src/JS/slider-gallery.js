export function sliderGallery() {
  const galeryContainer = document.querySelector(".img_gallery");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const items = galeryContainer.querySelectorAll(".car_gallery-item");
  console.log(items.length);
  let offset = 0;

  const screenWidth = window.innerWidth;
  let step;

  if (screenWidth >= 394 && screenWidth < 746) {
    step = 329;
  } else if (screenWidth >= 746 && screenWidth < 1280) {
    step = 616;
  } else if (screenWidth >= 1280) {
    step = 648;
  }

  const width = items.length * step - step;
  console.log(width);
  prevBtn.addEventListener("click", () => {
    offset = offset - step;
    if (offset < 0) {
      offset = width;
    }

    galeryContainer.style.left = -offset + "px";
    console.log(offset);
  });
  nextBtn.addEventListener("click", () => {
    offset = offset + step;
    if (offset > width) {
      offset = 0;
    }
    galeryContainer.style.left = -offset + "px";
    console.log(offset);
  });
}
