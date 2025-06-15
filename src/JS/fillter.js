import { setSelectedBrand, renderCarsList, loadCars } from "./carList";

export function useFillter() {
  const filterList = document.querySelector(".car_checkbox-list");
  const fillterOkBtn = document.querySelector(".fillter_ok-btn");
  const resetFilterBtn = document.querySelector(".fillter_clear-btn");

  if (!filterList || !fillterOkBtn || !resetFilterBtn) return;

  filterList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("check_box-checked")) {
      console.log("Check box clicked");
      target.classList.toggle("check");

      const anyChecked = filterList.querySelector(".check_box-checked.check");
      fillterOkBtn.classList.toggle("search", !!anyChecked);
    }
  });

  fillterOkBtn.addEventListener("click", () => {
    const checked = filterList.querySelector(".check_box-checked.check");
    const brand = checked
      ? checked.parentElement.nextElementSibling.textContent.trim()
      : null;

    setSelectedBrand(brand);
    renderCarsList().then(() => loadCars());
  });

  resetFilterBtn.addEventListener("click", () => {
    const checkedBoxes = filterList.querySelectorAll(
      ".check_box-checked.check"
    );
    checkedBoxes.forEach((box) => box.classList.remove("check"));

    fillterOkBtn.classList.remove("search");
    setSelectedBrand(null);
    renderCarsList().then(() => loadCars());
  });
}
