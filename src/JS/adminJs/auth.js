import { loginAdmin } from "../../API/api";

export function authControle() {
  const authForm = document.getElementById("authForm");
  const authModal = document.getElementById("authModal");

  if (!authForm || !authModal) return;

  authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value.trim();

    try {
      await loginAdmin(password);
      localStorage.setItem("admin-auth", "true");
      authModal.style.display = "none";
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  });
}
