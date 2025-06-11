import { formSend } from "./JS/form";
import { burgerMenu } from "./JS/modal-menu";
import { carList } from "./JS/carList";

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  formSend();
  carList();
});

const arrowSelects = document.querySelectorAll(".arrow_select");
const selectContainers = document.querySelectorAll(".header_select");
arrowSelects.forEach((btn, index) => {
  let isOpen = false;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const container = selectContainers[index];

    if (isOpen) {
      container.style.height = "24px";
      container.style.background = "transparent";
    } else {
      selectContainers.forEach((el) => {
        el.style.height = "24px";
        el.style.background = "transparent";
      });

      container.style.height = "74px";
      container.style.background = "var(--white-500)";
    }

    isOpen = !isOpen;
  });
});

document.addEventListener("click", () => {
  selectContainers.forEach((container) => {
    container.style.height = "24px";
    container.style.background = "transparent";
  });
});
