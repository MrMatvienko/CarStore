document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const lang = this.value;
    if (lang === "EN") {
      window.location.href = "/CarStore/index.html";
    } else if (lang === "ES") {
      window.location.href = "/CarStore/es/index.html";
    } else if (lang === "RU") {
      window.location.href = "/CarStore/ru/index.html";
    }
  });
const selectWrapper = document.querySelector(".custom-select-wrapper");
const select = document.getElementById("language-select");

select.addEventListener("click", () => {
  selectWrapper.classList.toggle("open");
});

select.addEventListener("blur", () => {
  selectWrapper.classList.remove("open");
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
