// Données des photos avec descriptions créatives
const photosData = {
    'photo1': {
        src: 'images/photo1.jpg',
        title: 'Notre Complicité Éternelle',
        date: 'Un moment précieux',
        description: 'Ce regard complice que nous partageons... Il dit tout sans qu\'un mot ne soit prononcé. Dans tes yeux, je vois notre passé, notre présent et notre futur. Cette photo capture l\'essence même de notre amour : la complicité, la tendresse et cette connexion unique qui nous unit.',
        tags: ['Complicité', 'Amour', 'Tendresse']
    },
    'photo2': {
        src: 'images/photo2.jpg',
        title: 'Sourires Partagés',
        date: 'Moments de joie',
        description: 'Nos sourires racontent notre histoire. Chaque fois que je te vois sourire, mon cœur s\'illumine. Cette photo immortalise ces moments où le bonheur est si intense qu\'il déborde. Avec toi, chaque jour est une célébration de l\'amour.',
        tags: ['Joie', 'Bonheur', 'Sourires']
    },
    'photo3': {
        src: 'images/photo3.jpg',
        title: 'Aventures Ensemble',
        date: 'Nos explorations',
        description: 'Partir à l\'aventure avec toi, c\'est découvrir le monde avec des yeux nouveaux. Chaque lieu devient magique quand tu es à mes côtés. Cette photo capture notre esprit d\'aventure et notre désir de créer des souvenirs inoubliables ensemble.',
        tags: ['Voyage', 'Aventure', 'Découverte']
    },
    'photo4': {
        src: 'images/photo4.jpg',
        title: 'Célébration de Notre Amour',
        date: 'Moments spéciaux',
        description: 'Chaque moment avec toi mérite d\'être célébré. Cette photo capture un de ces instants magiques où nous avons pris le temps de célébrer notre amour, notre parcours et tout ce que nous avons construit ensemble. Tu es ma plus belle célébration.',
        tags: ['Célébration', 'Amour', 'Spécial']
    },
    'photo5': {
        src: 'images/photo5.jpg',
        title: 'Tendresse Infinie',
        date: 'Câlins magiques',
        description: 'Dans tes bras, je trouve ma maison. Cette photo capture la douceur de nos étreintes, la chaleur de ta présence et ce sentiment de sécurité que je ressens quand tu me serres contre toi. Nos câlins sont notre langage secret d\'amour.',
        tags: ['Tendresse', 'Câlins', 'Douceur']
    },
    'photo6': {
        src: 'images/photo6.jpg',
        title: 'Nouveaux Horizons',
        date: 'Découvertes partagées',
        description: 'Ensemble, nous explorons de nouveaux horizons, tant géographiques qu\'émotionnels. Cette photo symbolise notre ouverture au monde et notre désir de grandir ensemble. Chaque nouvelle expérience nous rapproche un peu plus.',
        tags: ['Horizons', 'Exploration', 'Ensemble']
    },
    'photo7': {
        src: 'images/photo7.jpg',
        title: 'Anniversaire de Notre Amour',
        date: 'Célébration annuelle',
        description: 'Chaque anniversaire est une pierre milliaire de notre histoire. Cette photo capture la joie de célébrer une année de plus ensemble, de se remémorer nos moments forts et de se projeter vers l\'avenir. Notre amour grandit avec chaque année qui passe.',
        tags: ['Anniversaire', 'Célébration', 'Amour']
    },
    'photo8': {
        src: 'images/photo8.jpg',
        title: 'Joie de Vivre',
        date: 'Bonheur quotidien',
        description: 'Cette photo capture notre joie de vivre, cette énergie positive qui nous anime quand nous sommes ensemble. Rire avec toi est l\'une de mes activités préférées. Tu apportes de la lumière dans ma vie chaque jour.',
        tags: ['Joie', 'Rire', 'Bonheur']
    }
};

// Charger les détails de la photo
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier l'authentification
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // Récupérer l'ID de la photo depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const photoId = urlParams.get('id');

    if (photoId && photosData[photoId]) {
        loadPhotoDetails(photoId);
        loadComments(photoId);
    } else {
        // Rediriger vers l'album si l'ID n'est pas valide
        window.location.href = 'album.html';
    }

    // Gestion du formulaire de commentaire
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addComment(photoId);
        });
    }

    // Bouton de déconnexion
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
});

// Charger les détails de la photo
function loadPhotoDetails(photoId) {
    const photo = photosData[photoId];
    
    document.getElementById('detailImage').src = photo.src;
    document.getElementById('detailImage').alt = photo.title;
    document.getElementById('photoTitle').textContent = photo.title;
    document.getElementById('photoDate').textContent = photo.date;
    document.getElementById('photoDescription').textContent = photo.description;
    
    // Afficher les tags
    const tagsContainer = document.getElementById('photoTags');
    tagsContainer.innerHTML = photo.tags.map(tag => 
        `<span class="photo-tag">${tag}</span>`
    ).join('');
}

// Charger les commentaires
function loadComments(photoId) {
    const comments = getComments(photoId);
    const commentsList = document.getElementById('commentsList');
    const noComments = document.getElementById('noComments');

    if (comments.length === 0) {
        noComments.style.display = 'block';
        commentsList.innerHTML = '';
        return;
    }

    noComments.style.display = 'none';
    commentsList.innerHTML = comments.map(comment => createCommentHTML(comment, photoId)).join('');

    // Ajouter les event listeners pour les boutons
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
                    <button class="comment-edit-btn" data-comment-id="${comment.id}">✏️ Modifier</button>
                    <button class="comment-delete-btn" data-comment-id="${comment.id}">🗑️ Supprimer</button>
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
function addComment(photoId) {
    const commentText = document.getElementById('commentText').value.trim();
    if (!commentText) return;

    const currentUser = getCurrentUser();
    const comment = {
        id: Date.now(),
        photoId: photoId,
        userId: currentUser.userId,
        userName: currentUser.name,
        text: commentText,
        createdAt: new Date().toISOString(),
        likes: []
    };

    // Récupérer les commentaires existants
    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    allComments.push(comment);
    localStorage.setItem('photoComments', JSON.stringify(allComments));

    // Réinitialiser le formulaire
    document.getElementById('commentText').value = '';

    // Recharger les commentaires
    loadComments(photoId);
}

// Récupérer les commentaires d'une photo
function getComments(photoId) {
    const allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    return allComments
        .filter(c => c.photoId === photoId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Attacher les event listeners aux boutons de commentaires
function attachCommentEventListeners(photoId) {
    // Boutons like
    document.querySelectorAll('.comment-like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleLike(this.dataset.commentId, photoId);
        });
    });

    // Boutons modifier
    document.querySelectorAll('.comment-edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showEditForm(this.dataset.commentId);
        });
    });

    // Boutons supprimer
    document.querySelectorAll('.comment-delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            deleteComment(this.dataset.commentId, photoId);
        });
    });

    // Boutons enregistrer
    document.querySelectorAll('.comment-save-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            saveEdit(this.dataset.commentId, photoId);
        });
    });

    // Boutons annuler
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
    loadComments(photoId);
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
        loadComments(photoId);
    }
}

// Supprimer un commentaire
function deleteComment(commentId, photoId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) return;

    let allComments = JSON.parse(localStorage.getItem('photoComments') || '[]');
    allComments = allComments.filter(c => c.id != commentId);
    localStorage.setItem('photoComments', JSON.stringify(allComments));
    loadComments(photoId);
}
