const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
