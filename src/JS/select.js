export function selectFiller() {
  const arrowBtn = document.querySelector(".fillter-icon-arrow");
  const selectBox = document.querySelector(".car_checkbox");
  const fillterBtn = document.querySelector(".car_fillter-text");

  // Перевіряємо, чи всі елементи існують у DOM
  if (!arrowBtn || !selectBox || !fillterBtn) {
    console.error("One or more elements for selectFiller not found!");
    return;
  }
  const toggleSelectBox = () => {
    selectBox.classList.toggle("show");
  };
  arrowBtn.addEventListener("click", toggleSelectBox);
  fillterBtn.addEventListener("click", toggleSelectBox);
  document.addEventListener("click", (event) => {
    const isClickInsideSelectBox = selectBox.contains(event.target);
    const isClickOnToggleButtons =
      arrowBtn.contains(event.target) || fillterBtn.contains(event.target);

    if (
      selectBox.classList.contains("show") &&
      !isClickInsideSelectBox &&
      !isClickOnToggleButtons
    ) {
      selectBox.classList.remove("show");
    }
  });
}
