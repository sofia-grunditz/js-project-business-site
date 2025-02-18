document.getElementById('menu-button').addEventListener('click', function() {
  const menu = document.getElementById('navbar');
  menu.classList.toggle('show'); // Toggles visibility of the menu
});

// Close the menu if clicked outside (optional)
window.addEventListener('click', function(event) {
  const navbar = document.getElementById('navbar');
  const menuButton = document.getElementById('menu-button');
  if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
    navbar.classList.remove('show');
  }
});