document.addEventListener("DOMContentLoaded", () => {});

const arrowSelects = document.querySelectorAll(".arrow_select");
const selectContainers = document.querySelectorAll(".header_select");
const selectLists = document.querySelectorAll(".header_select-list");

arrowSelects.forEach((btn, index) => {
  let isOpen = false;

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Щоб клік не доходив до document

    const container = selectContainers[index];

    if (isOpen) {
      container.style.height = "24px";
      container.style.background = "transparent";
    } else {
      // Закриваємо всі інші
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
/*-------burger-------*/

const burgerBtn = document.querySelector(".header_burger");
const closeBtn = document.querySelector(".icon_close");
const menu = document.querySelector(".mobile_modal-menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
