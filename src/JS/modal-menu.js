export function burgerMenu() {
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
}
