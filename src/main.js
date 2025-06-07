const selectBtn = document.querySelector(".arrow_select");
const selectList = document.querySelector(".header_select-list");
const selectContainer = document.querySelector(".header_select");

let isOpen = false;

selectBtn.addEventListener("click", () => {
  if (isOpen) {
    selectContainer.style.height = "24px";
    selectContainer.style.background = "transparent";
  } else {
    selectContainer.style.height = "74px";
    selectContainer.style.background = "var(--white-500)";
  }
  isOpen = !isOpen;
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
