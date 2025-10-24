// Script pour gérer le menu hamburger responsive

document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton hamburger s'il n'existe pas
    const navContainer = document.querySelector('.nav-container');
    
    if (navContainer && !document.querySelector('.hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Insérer le hamburger après le logo
        const logo = navContainer.querySelector('.logo');
        if (logo) {
            logo.insertAdjacentElement('afterend', hamburger);
        }
        
        // Ajouter l'événement click
        setupHamburgerMenu();
    } else if (document.querySelector('.hamburger')) {
        // Si le hamburger existe déjà, juste setup les events
        setupHamburgerMenu();
    }
});

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Supprimer les anciens listeners pour éviter les doublons
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        newHamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            newHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = newHamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}
