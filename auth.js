// Système d'authentification avec localStorage

// Basculer entre connexion et inscription
document.addEventListener('DOMContentLoaded', function() {
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginFormElement = document.getElementById('loginFormElement');
    const registerFormElement = document.getElementById('registerFormElement');

    if (showRegisterBtn) {
        showRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        });
    }

    // Gestion de l'inscription
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            const errorDiv = document.getElementById('registerError');
            const successDiv = document.getElementById('registerSuccess');

            errorDiv.textContent = '';
            successDiv.textContent = '';

            // Validation
            if (password !== confirmPassword) {
                errorDiv.textContent = 'Les mots de passe ne correspondent pas';
                return;
            }

            if (password.length < 6) {
                errorDiv.textContent = 'Le mot de passe doit contenir au moins 6 caractères';
                return;
            }

            // Récupérer les utilisateurs existants
            let users = JSON.parse(localStorage.getItem('users') || '[]');

            // Vérifier si l'email existe déjà
            if (users.find(u => u.email === email)) {
                errorDiv.textContent = 'Cet email est déjà utilisé';
                return;
            }

            // Créer le nouvel utilisateur
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password, // En production, il faudrait hasher le mot de passe
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            successDiv.textContent = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
            
            // Réinitialiser le formulaire
            registerFormElement.reset();

            // Basculer vers la connexion après 2 secondes
            setTimeout(() => {
                registerForm.classList.remove('active');
                loginForm.classList.add('active');
            }, 2000);
        });
    }

    // Gestion de la connexion
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');

            errorDiv.textContent = '';

            // Récupérer les utilisateurs
            let users = JSON.parse(localStorage.getItem('users') || '[]');

            // Vérifier les identifiants
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Connexion réussie
                const session = {
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                    loginTime: new Date().toISOString()
                };
                
                localStorage.setItem('currentUser', JSON.stringify(session));
                
                // Rediriger vers l'album
                window.location.href = 'album.html';
            } else {
                errorDiv.textContent = 'Email ou mot de passe incorrect';
            }
        });
    }
});

// Fonction pour vérifier si l'utilisateur est connecté
function isLoggedIn() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
}

// Fonction pour obtenir l'utilisateur actuel
function getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

// Fonction pour se déconnecter
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Protéger la page album
if (window.location.pathname.includes('album.html')) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}
