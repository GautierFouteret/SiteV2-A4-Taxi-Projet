// Récupération des éléments du DOM
const contactForm = document.querySelector('#contact-form');
const confirmationMessage = document.querySelector('#confirmation-message');
const gallery = document.querySelector('#gallery');

// Écouteur d'événement pour le formulaire de contact
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Simulation de l'envoi du message
    setTimeout(function() {
        contactForm.reset(); // Réinitialise le formulaire
        confirmationMessage.style.display = 'block'; // Affiche le message de confirmation
        setTimeout(function() {
            confirmationMessage.style.display = 'none'; // Cache le message de confirmation après 3 secondes
        }, 3000);
    }, 1000);
});

// Génération de la galerie de photos de la flotte de taxis
const images = ['taxi1.jpg', 'taxi2.jpg', 'taxi3.jpg']; // Remplacez avec les noms de vos images
images.forEach(image => {
    const img = document.createElement('img');
    img.src = 'images/' + image; // Assurez-vous que le chemin d'accès est correct
    img.alt = 'Taxi';
    gallery.appendChild(img);
});
