export function sliderGallery() {
  const galeryContainer = document.querySelector(".img_gallery");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const items = galeryContainer.querySelectorAll(".car_gallery-item");

  let offset = 0;
  const screenWidth = window.innerWidth;
  let step;

  if (screenWidth >= 1280) {
    step = 648;
  } else if (screenWidth >= 746) {
    step = 616;
  } else {
    step = 329;
  }

  const width = items.length * step - step;

  function updatePosition() {
    galeryContainer.style.left = -offset + "px";
  }

  prevBtn?.addEventListener("click", () => {
    offset -= step;
    if (offset < 0) offset = width;
    updatePosition();
  });

  nextBtn?.addEventListener("click", () => {
    offset += step;
    if (offset > width) offset = 0;
    updatePosition();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  galeryContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  galeryContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipe = 50;

    if (swipeDistance > minSwipe) {
      offset -= step;
      if (offset < 0) offset = width;
      updatePosition();
    } else if (swipeDistance < -minSwipe) {
      offset += step;
      if (offset > width) offset = 0;
      updatePosition();
    }
  }
}
