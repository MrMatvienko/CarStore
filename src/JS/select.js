export function selectFiller() {
  const arrowBtn = document.querySelector(".fillter-icon-arrow");
  const selectBox = document.querySelector(".car_checkbox");
  const fillterBtn = document.querySelector(".car_fillter-text");

  arrowBtn.addEventListener("click", () => {
    selectBox.classList.toggle("show");
  });
  fillterBtn.addEventListener("click", () => {
    selectBox.classList.toggle("show");
  });
}
