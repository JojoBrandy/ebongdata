// loading Animation

document.body.classList.add('loading');

window.addEventListener('load', () => {
  document.body.classList.remove('loading');
  document.body.classList.add('loaded');
});

// password


// Vérifier si l'utilisateur a déjà validé le mot de passe
if (!localStorage.getItem('authenticated')) {
  let password = prompt("Veuillez entrer le mot de passe pour accéder au site :");

  if (password === "ebongtgvdye547398") {
    localStorage.setItem('authenticated', 'true'); // Enregistrer que l'utilisateur est authentifié
  } else {
    alert("Mot de passe incorrect.");
    window.location = "https://google.com"; // Redirige vers une autre page si le mot de passe est incorrect
  }
}


// Alert message js

let currentDownloadUrl = ""; // Stocke l'URL du fichier à télécharger

// Ajouter un événement à tous les liens de téléchargement
document.querySelectorAll('.download-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche l'action par défaut
    currentDownloadUrl = this.href; // Stocke l'URL du lien cliqué
    const popup = document.getElementById('custom-popup');
    popup.style.visibility = 'visible'; // Affiche le pop-up
    popup.style.opacity = '1'; // Transition pour rendre le pop-up visible
  });
});

// Bouton "Oui" pour confirmer le téléchargement
document.getElementById('confirm-yes').addEventListener('click', function() {
  if (currentDownloadUrl) {
    window.location.href = currentDownloadUrl; // Lance le téléchargement
  }
  const popup = document.getElementById('custom-popup');
  popup.style.visibility = 'hidden'; // Cache le pop-up
  popup.style.opacity = '0'; // Transition pour cacher le pop-up
});

// Bouton "Non" pour annuler
document.getElementById('confirm-no').addEventListener('click', function() {
  const popup = document.getElementById('custom-popup');
  popup.style.visibility = 'hidden'; // Cache le pop-up
  popup.style.opacity = '0'; // Transition pour cacher le pop-up
});


// menu burger 

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.Ebong_nav ul');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open'); // Ajoute/enlève la classe "open" pour afficher/cacher le menu
});


