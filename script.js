// Hämta referenser till de element vi behöver
const menuButton = document.getElementById('menu-button');  // Menyknapp
const navbardialog = document.querySelector("#navbardialog");  // Dialogruta

// Lägg till eventlyssnare för att öppna dialogrutan när menyknapp klickas
menuButton.addEventListener('click', function () {
  navbardialog.showModal();  // Öppnar dialogrutan
});

// Lägg till eventlyssnare för att stänga dialogrutan när användaren klickar på bakgrunden
navbardialog.addEventListener('click', function (event) {
  if (event.target === this) {
    navbardialog.close();  // Stänger dialogrutan
  }
});
