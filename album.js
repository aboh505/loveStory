// Données des 18 photos
const photosData = {
    'photo1': {
        src: 'images/7.jpg',
        title: 'Aventures Ensemble',
        date: 'Nos explorations',
        description: 'Partir à l\'aventure avec toi, c\'est découvrir le monde avec des yeux nouveaux. Chaque lieu devient magique quand tu es à mes côtés. Cette photo capture notre esprit d\'aventure et notre désir de créer des souvenirs inoubliables ensemble.',
        tags: ['Voyage', 'Aventure', 'Découverte']
    },
    'photo2': {
        src: 'images/20.jpg',
        title: 'Notre Complicité',
        date: 'Moments complices',
        description: 'Ce regard complice que nous partageons... Il dit tout sans qu\'un mot ne soit prononcé. Dans tes yeux, je vois notre passé, notre présent et notre futur. Cette photo capture l\'essence même de notre amour : la complicité, la tendresse et cette connexion unique qui nous unit.',
        tags: ['Complicité', 'Amour', 'Tendresse']
    },
    'photo3': {
        src: 'images/16.jpg',
        title: 'Tendresse Infinie',
        date: 'Câlins magiques',
        description: 'Dans tes bras, je trouve ma maison. Cette photo capture la douceur de nos étreintes, la chaleur de ta présence et ce sentiment de sécurité que je ressens quand tu me serres contre toi. Nos câlins sont notre langage secret d\'amour.',
        tags: ['Tendresse', 'Câlins', 'Douceur']
    },
    'photo4': {
        src: 'images/6.jpg',
        title: 'Célébration de Notre Amour',
        date: 'Moments spéciaux',
        description: 'Chaque moment avec toi mérite d\'être célébré. Cette photo capture un de ces instants magiques où nous avons pris le temps de célébrer notre amour, notre parcours et tout ce que nous avons construit ensemble. Tu es ma plus belle célébration.',
        tags: ['Célébration', 'Amour', 'Spécial']
    },
    'photo5': {
        src: 'images/14.jpg',
        title: 'Moments Magiques',
        date: 'Instants précieux',
        description: 'Il y a ces moments où le temps semble s\'arrêter, où tout devient parfait. Cette photo immortalise un de ces instants magiques où nous étions simplement nous, ensemble, heureux. La magie de notre amour réside dans ces petits moments du quotidien.',
        tags: ['Magie', 'Moments', 'Bonheur']
    },
    'photo6': {
        src: 'images/4.jpg',
        title: 'Notre Amour Éternel',
        date: 'Pour toujours',
        description: 'Cette photo symbolise l\'éternité de notre amour. De 2021 à 2025 et au-delà, notre histoire continue de s\'écrire. Chaque jour avec toi est un nouveau chapitre rempli d\'amour, de rires et de tendresse. Notre amour est éternel.',
        tags: ['Éternel', 'Amour', 'Toujours']
    },
    'photo7': {
        src: 'images/22.jpg',
        title: 'Ensemble',
        date: 'Unis pour la vie',
        description: 'Ensemble, nous sommes plus forts. Cette photo capture notre unité, notre force en tant que couple. Main dans la main, nous affrontons tout ce que la vie nous réserve. Ensemble, nous sommes invincibles.',
        tags: ['Ensemble', 'Unité', 'Force']
    },
    'photo8': {
        src: 'images/19.jpg',
        title: 'Joie de Vivre',
        date: 'Bonheur quotidien',
        description: 'Cette photo capture notre joie de vivre, cette énergie positive qui nous anime quand nous sommes ensemble. Rire avec toi est l\'une de mes activités préférées. Tu apportes de la lumière dans ma vie chaque jour.',
        tags: ['Joie', 'Rire', 'Bonheur']
    },
    'photo9': {
        src: 'images/18.jpg',
        title: 'Sourires Partagés',
        date: 'Moments de joie',
        description: 'Nos sourires racontent notre histoire. Chaque fois que je te vois sourire, mon cœur s\'illumine. Cette photo immortalise ces moments où le bonheur est si intense qu\'il déborde. Avec toi, chaque jour est une célébration de l\'amour.',
        tags: ['Sourires', 'Joie', 'Bonheur']
    },
    'photo10': {
        src: 'images/17.jpg',
        title: 'Douceur du Quotidien',
        date: 'Petits moments',
        description: 'C\'est dans les petits moments du quotidien que se cache le plus grand bonheur. Cette photo capture la douceur de notre vie à deux, ces instants simples mais précieux qui font la beauté de notre histoire.',
        tags: ['Douceur', 'Quotidien', 'Simplicité']
    },
    'photo11': {
        src: 'images/23.jpg',
        title: 'Passion Ardente',
        date: 'Flamme éternelle',
        description: 'Notre passion ne s\'éteint jamais. Cette photo capture l\'intensité de nos sentiments, cette flamme qui brûle en nous depuis le premier jour. Notre amour est une passion ardente qui ne cesse de grandir.',
        tags: ['Passion', 'Intensité', 'Flamme']
    },
    'photo12': {
        src: 'images/24.jpg',
        title: 'Éternité',
        date: 'Pour toujours et à jamais',
        description: 'L\'éternité n\'est pas assez longue pour t\'aimer. Cette photo symbolise notre engagement l\'un envers l\'autre, notre promesse de rester ensemble quoi qu\'il arrive. Notre amour transcende le temps.',
        tags: ['Éternité', 'Promesse', 'Engagement']
    },
    'photo13': {
        src: 'images/21.jpg',
        title: 'Rêves Partagés',
        date: 'Nos aspirations',
        description: 'Nous rêvons ensemble, nous construisons ensemble. Cette photo capture nos rêves partagés, nos projets d\'avenir, tout ce que nous voulons accomplir main dans la main. Nos rêves sont notre boussole.',
        tags: ['Rêves', 'Avenir', 'Projets']
    },
    'photo14': {
        src: 'images/13.jpg',
        title: 'Connexion Profonde',
        date: 'Âmes sœurs',
        description: 'Notre connexion va au-delà des mots. Cette photo capture cette compréhension mutuelle, cette capacité à se comprendre sans parler. Nous sommes connectés au niveau de l\'âme, deux cœurs qui battent à l\'unisson.',
        tags: ['Connexion', 'Âmes', 'Compréhension']
    },
    'photo15': {
        src: 'images/26.jpg',
        title: 'Harmonie Parfaite',
        date: 'En parfait accord',
        description: 'Nous sommes en harmonie, en parfait accord. Cette photo capture l\'équilibre de notre relation, cette capacité à nous compléter mutuellement. Ensemble, nous créons une mélodie parfaite.',
        tags: ['Harmonie', 'Équilibre', 'Accord']
    },
    'photo16': {
        src: 'images/27.jpg',
        title: 'Fusion des Cœurs',
        date: 'Un seul cœur',
        description: 'Nos deux cœurs ne font qu\'un. Cette photo symbolise la fusion de nos âmes, cette union profonde qui nous lie. Nous sommes deux personnes, mais un seul amour, une seule vie partagée.',
        tags: ['Fusion', 'Union', 'Cœurs']
    },
    'photo17': {
        src: 'images/15.jpg',
        title: 'Unité Indestructible',
        date: 'Ensemble et forts',
        description: 'Notre unité est notre force. Cette photo capture notre solidarité, notre capacité à rester unis face à toutes les épreuves. Ensemble, nous sommes indestructibles, rien ne peut nous séparer.',
        tags: ['Unité', 'Force', 'Solidarité']
    },
    'photo18': {
        src: 'images/11.jpg',
        title: 'Promesse d\'Amour',
        date: 'Engagement éternel',
        description: 'Cette photo capture notre promesse d\'amour éternel. De 2021 à 2025 et pour toutes les années à venir, nous nous promettons de nous aimer, de nous soutenir et de grandir ensemble. Notre promesse est sacrée.',
        tags: ['Promesse', 'Engagement', 'Éternel']
    }
};

let currentPhotoId = null;

// Vérifier l'authentification
document.addEventListener('DOMContentLoaded', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

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
    setupAlbumFilters();

    // Formulaire de commentaire dans le modal
    const modalCommentForm = document.getElementById('modalCommentForm');
    if (modalCommentForm) {
        modalCommentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addModalComment();
        });
    }

    // Fermer le modal en cliquant en dehors
    window.onclick = function(event) {
        const modal = document.getElementById('photoModal');
        if (event.target == modal) {
            closePhotoModal();
        }
    }
});

// Filtres de l'album
function setupAlbumFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item-small');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
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

// Ouvrir le modal photo
function openPhotoModal(photoId) {
    currentPhotoId = photoId;
    const photo = photosData[photoId];
    
    if (!photo) return;

    // Remplir les informations de la photo
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDate').textContent = photo.date;
    document.getElementById('modalDescription').textContent = photo.description;
    
    // Afficher les tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = photo.tags.map(tag => 
        `<span class="photo-tag">${tag}</span>`
    ).join('');

    // Charger les commentaires
    loadModalComments(photoId);

    // Afficher le modal
    document.getElementById('photoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermer le modal
function closePhotoModal() {
    document.getElementById('photoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentPhotoId = null;
    
    // Réinitialiser le formulaire
    document.getElementById('modalCommentForm').reset();
    
    // Réinitialiser l'affichage des commentaires
    const commentsContent = document.getElementById('commentsContent');
    const eyeIcon = document.getElementById('eyeIcon');
    const toggleText = document.getElementById('toggleText');
    
    if (commentsContent) {
        commentsContent.classList.remove('visible');
        eyeIcon.textContent = '👁️';
        toggleText.textContent = '';
    }
}

// Toggle affichage des commentaires
function toggleComments() {
    const commentsContent = document.getElementById('commentsContent');
    const eyeIcon = document.getElementById('eyeIcon');
    const toggleText = document.getElementById('toggleText');
    
    if (commentsContent.classList.contains('visible')) {
        commentsContent.classList.remove('visible');
        eyeIcon.textContent = '👁️';
        toggleText.textContent = '';
    } else {
        commentsContent.classList.add('visible');
        eyeIcon.textContent = '👁️';
        toggleText.textContent = '';
    }
}

// Charger les commentaires
function loadModalComments(photoId) {
    const comments = getComments(photoId);
    const commentsList = document.getElementById('modalCommentsList');
    const noComments = document.getElementById('modalNoComments');

    if (comments.length === 0) {
        noComments.style.display = 'block';
        commentsList.innerHTML = '';
        return;
    }

    noComments.style.display = 'none';
    commentsList.innerHTML = comments.map(comment => createCommentHTML(comment)).join('');

    // Attacher les event listeners
    attachCommentEventListeners(photoId);
}

// Créer le HTML d'un commentaire
function createCommentHTML(comment) {
    const currentUser = getCurrentUser();
    const isOwner = currentUser && currentUser.userId === comment.userId;
    const date = new Date(comment.createdAt);
    const formattedDate = date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return `
        <div class="comment-item" data-comment-id="${comment.id}">
            <div class="comment-header">
                <div class="comment-user">
                    <span class="comment-avatar">👤</span>
                    <span class="comment-username">${comment.userName}</span>
                </div>
                <span class="comment-date">${formattedDate}</span>
            </div>
            <div class="comment-body">
                <p class="comment-text">${comment.text}</p>
            </div>
            <div class="comment-actions">
                <button class="comment-like-btn ${comment.likes && comment.likes.includes(currentUser.userId) ? 'liked' : ''}" 
                        data-comment-id="${comment.id}">
                    ❤️ <span class="like-count">${comment.likes ? comment.likes.length : 0}</span>
                </button>
                ${isOwner ? `
                    <button class="comment-edit-btn" data-comment-id="${comment.id}">✏️ </button>
                    <button class="comment-delete-btn" data-comment-id="${comment.id}">🗑️ </button>
                ` : ''}
            </div>
            ${isOwner ? `
                <div class="comment-edit-form" id="edit-form-${comment.id}" style="display: none;">
                    <textarea class="comment-edit-textarea" id="edit-text-${comment.id}">${comment.text}</textarea>
                    <div class="comment-edit-actions">
                        <button class="comment-save-btn" data-comment-id="${comment.id}">💾 Enregistrer</button>
                        <button class="comment-cancel-btn" data-comment-id="${comment.id}">❌ Annuler</button>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// Ajouter un commentaire
function addModalComment() {
    const commentText = document.getElementById('modalCommentText').value.trim();
    if (!commentText || !currentPhotoId) return;

    const currentUser = getCurrentUser();
    const comment = {
        id: Date.now(),
        photoId: currentPhotoId,
        userId: currentUser.userId,
        userName: currentUser.name,
        text: commentText,
        createdAt: new Date().toISOString(),
        likes: []
    };

    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    allComments.push(comment);
    localStorage.setItem('photoComments', JSON.stringify(allComments));

    document.getElementById('modalCommentText').value = '';
    loadModalComments(currentPhotoId);
}

// Récupérer les commentaires d'une photo
function getComments(photoId) {
    const allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    return allComments
        .filter(c => c.photoId === photoId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Attacher les event listeners
function attachCommentEventListeners(photoId) {
    document.querySelectorAll('.comment-like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleLike(this.dataset.commentId, photoId);
        });
    });

    document.querySelectorAll('.comment-edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showEditForm(this.dataset.commentId);
        });
    });

    document.querySelectorAll('.comment-delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            deleteComment(this.dataset.commentId, photoId);
        });
    });

    document.querySelectorAll('.comment-save-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            saveEdit(this.dataset.commentId, photoId);
        });
    });

    document.querySelectorAll('.comment-cancel-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            hideEditForm(this.dataset.commentId);
        });
    });
}

// Toggle like
function toggleLike(commentId, photoId) {
    const currentUser = getCurrentUser();
    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    
    const commentIndex = allComments.findIndex(c => c.id == commentId);
    if (commentIndex === -1) return;

    if (!allComments[commentIndex].likes) {
        allComments[commentIndex].likes = [];
    }

    const likeIndex = allComments[commentIndex].likes.indexOf(currentUser.userId);
    if (likeIndex > -1) {
        allComments[commentIndex].likes.splice(likeIndex, 1);
    } else {
        allComments[commentIndex].likes.push(currentUser.userId);
    }

    localStorage.setItem('photoComments', JSON.stringify(allComments));
    loadModalComments(photoId);
}

// Afficher le formulaire d'édition
function showEditForm(commentId) {
    const editForm = document.getElementById(`edit-form-${commentId}`);
    const commentText = editForm.previousElementSibling.querySelector('.comment-text');
    
    commentText.style.display = 'none';
    editForm.style.display = 'block';
}

// Masquer le formulaire d'édition
function hideEditForm(commentId) {
    const editForm = document.getElementById(`edit-form-${commentId}`);
    const commentText = editForm.previousElementSibling.querySelector('.comment-text');
    
    commentText.style.display = 'block';
    editForm.style.display = 'none';
}

// Enregistrer la modification
function saveEdit(commentId, photoId) {
    const newText = document.getElementById(`edit-text-${commentId}`).value.trim();
    if (!newText) return;

    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    const commentIndex = allComments.findIndex(c => c.id == commentId);
    
    if (commentIndex !== -1) {
        allComments[commentIndex].text = newText;
        allComments[commentIndex].editedAt = new Date().toISOString();
        localStorage.setItem('photoComments', JSON.stringify(allComments));
        loadModalComments(photoId);
    }
}

// Supprimer un commentaire
function deleteComment(commentId, photoId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) return;

    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    allComments = allComments.filter(c => c.id != commentId);
    localStorage.setItem('photoComments', JSON.stringify(allComments));
    loadModalComments(photoId);
}
