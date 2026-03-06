document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/html/nav.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("nav-wrapper").innerHTML = html;

      const openBtn = document.querySelector(".mobile-button");
      const closeBtn = document.querySelector(".close-sidebar");
      const sidebar = document.querySelector(".mobile-sidebar");

      openBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
      });

      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    })
    .catch((err) => console.error("Navbar load failed:", err));
});
