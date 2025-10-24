// Script pour rediriger vers la page de connexion si l'utilisateur n'est pas connecté
// Intercepter les clics sur les liens vers l'album

document.addEventListener('DOMContentLoaded', function() {
    // Trouver tous les liens vers l'album
    const albumLinks = document.querySelectorAll('a[href="album-new.html"], a[href*="album"]');
    
    albumLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Vérifier si l'utilisateur est connecté
            const currentUser = localStorage.getItem('currentUser');
            
            if (!currentUser) {
                // Empêcher la navigation par défaut
                e.preventDefault();
                
                // Rediriger vers la page de connexion
                window.location.href = 'login.html';
            }
            // Si l'utilisateur est connecté, laisser le lien fonctionner normalement
        });
    });
});
