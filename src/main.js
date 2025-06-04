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
