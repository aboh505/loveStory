// Vérifier l'authentification pour l'album
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur est connecté
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // Afficher le nom de l'utilisateur
    const currentUser = getCurrentUser();
    const userNameEl = document.getElementById('userName');
    if (userNameEl && currentUser) {
        userNameEl.textContent = currentUser.name;
    }

    // Bouton de déconnexion
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
                logout();
            }
        });
    }

    // Filtres de l'album
    setupAlbumFiltersSmall();
});

// Filtres de l'album pour les petites cartes
function setupAlbumFiltersSmall() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item-small');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
