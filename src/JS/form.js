import { Notify } from "notiflix";
export function formSend() {
  const form = document.querySelector(".contact_form");

  if (form) {
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      const btn = document.querySelector(".contact_form-btn");
      let params = {
        name: document.getElementById("name").value.toUpperCase().trim(),
        lastName: document
          .getElementById("last-name")
          .value.toUpperCase()
          .trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("tell").value.trim(),
        comments: document.getElementById("comments").value.trim(),
      };

      emailjs
        .send("service_h008j4k", "template_lg67tv1", params)
        .then((resp) => {
          btn.classList.add("disabled");
          btn.disabled = true;
          Notify.success(`Success!`);
          form.reset();
        })
        .catch((error) => {
          Notify.failure(`Try again,${error}!`);
        })
        .finally(() => {
          btn.classList.remove("disabled");
          btn.disabled = false;
        });
    }
  }
}
