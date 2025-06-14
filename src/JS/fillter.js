export function useFillter() {
  const filterList = document.querySelector(".car_checkbox-list");
  const fillterOkBtn = document.querySelector(".fillter_ok-btn");
  const resetFilterBtn = document.querySelector(".fillter_clear-btn");

  if (!filterList || !fillterOkBtn || !resetFilterBtn) return;

  // Вибір фільтра
  filterList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("check_box-checked")) {
      target.classList.toggle("check");

      const anyChecked = filterList.querySelector(".check_box-checked.check");
      if (anyChecked) {
        fillterOkBtn.classList.add("search");
      } else {
        fillterOkBtn.classList.remove("search");
      }
    }
  });
  resetFilterBtn.addEventListener("click", () => {
    const checkedBoxes = filterList.querySelectorAll(
      ".check_box-checked.check"
    );
    checkedBoxes.forEach((box) => box.classList.remove("check"));

    fillterOkBtn.classList.remove("search");
  });
}
