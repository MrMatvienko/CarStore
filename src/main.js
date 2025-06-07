const arrowSelects = document.querySelectorAll(".arrow_select");
const selectContainers = document.querySelectorAll(".header_select");
const selectLists = document.querySelectorAll(".header_select-list");

arrowSelects.forEach((btn, index) => {
  let isOpen = false;

  btn.addEventListener("click", () => {
    const container = selectContainers[index];
    const list = selectLists[index];

    if (isOpen) {
      container.style.height = "24px";
      container.style.background = "transparent";
    } else {
      container.style.height = "74px";
      container.style.background = "var(--white-500)";
    }

    isOpen = !isOpen;
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
