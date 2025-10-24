// Animation au scroll
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des images par défaut si elles n'existent pas
    handleMissingImages();
    
    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec animation
    document.querySelectorAll('.fade-in, [class*="fade-in-delay"]').forEach(el => {
        observer.observe(el);
    });

    // Gestion de la galerie photo - Modal
    setupPhotoGallery();

    // Filtres de l'album
    setupAlbumFilters();

    // Animation des cœurs flottants
    animateHearts();
});

// Gestion des images manquantes
function handleMissingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            // Créer une image placeholder avec un dégradé et un cœur
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.background = 'linear-gradient(135deg, #ffb6c1, #f08080)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.fontSize = '4rem';
            placeholder.innerHTML = '💕';
            
            this.style.display = 'none';
            if (this.parentElement) {
                this.parentElement.appendChild(placeholder);
            }
        };
    });
}

// Configuration de la galerie photo avec modal
function setupPhotoGallery() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');

    // Ouvrir le modal au clic sur une image
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            const overlay = this.parentElement.querySelector('.gallery-overlay');
            if (overlay) {
                modalCaption.innerHTML = overlay.querySelector('h3').textContent;
            }
        });
    });

    // Fermer le modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Fermer en cliquant en dehors de l'image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Filtres de l'album photo
function setupAlbumFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

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

// Animation des cœurs flottants
function animateHearts() {
    const hearts = document.querySelectorAll('.hearts-background .heart');
    hearts.forEach((heart, index) => {
        // Animation aléatoire pour chaque cœur
        setInterval(() => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            heart.style.left = randomX + '%';
            heart.style.top = randomY + '%';
        }, 8000 + (index * 1000));
    });
}

// Effet de particules de cœurs au survol
document.addEventListener('mousemove', function(e) {
    // Créer occasionnellement un cœur au mouvement de la souris
    if (Math.random() > 0.95) {
        createFloatingHeart(e.pageX, e.pageY);
    }
});

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'absolute';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '1rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Ajouter l'animation CSS pour les cœurs flottants
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
