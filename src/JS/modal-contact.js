export function buyContact() {
  const buyBtns = document.querySelectorAll(".car_list-btn");
  const modal = document.querySelector(".car_modal");
  const closemodal = document.querySelector(".car_icon-close");

  if (!modal || !closemodal) {
    console.log("Card not find");
    return;
  }
  closemodal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  });
  if (buyBtns.length > 0) {
    buyBtns.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      });
    });
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
}
