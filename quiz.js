// Questions du quiz romantique - Réponses anonymes
const quizQuestions = [
    {
        question: "Quel est le surnom affectueux que Wilfried donne à Valeska ?",
        answers: [
            "Mon Choupimpim",
            "Ma princesse",
            "Mon amour",
            "Ma chérie"
        ],
        correct: 0
    },
    {
        question: "Quelle est la couleur préférée de Valeska ?",
        answers: [
            "Bleu",
            "Rose",
            "Violet",
            "Rouge"
        ],
        correct: 1
    },
    {
        question: "Quel est le plat préféré du couple ?",
        answers: [
            "Pizza",
            "Sushi",
            "Le koki",
            "Poulet rôti"
        ],
        correct: 2
    },
    {
        question: "Quels sont les signes astrologiques de Wilfried et Valeska ?",
        answers: [
            "Poisson et Capricorne",
            "Lion et Vierge",
            "Bélier et Taureau",
            "Gémeaux et Balance"
        ],
        correct: 0
    },
    {
        question: "Quel est le pays de rêve que le couple souhaite visiter ensemble ?",
        answers: [
            "Japon",
            "Arabie Saoudite",
            "Italie",
            "Maldives"
        ],
        correct: 1
    },
    {
        question: "Quel est le rêve commun de Wilfried et Valeska ?",
        answers: [
            "Voyager autour du monde",
            "Avoir une grande maison",
            "Rester ensemble",
            "Créer une entreprise"
        ],
        correct: 2
    },
    {
        question: "Quel est le film préféré du couple ?",
        answers: [
            "La La Land",
            "365 jours",
            "Thinking Out Loud",
            "A Thousand Years"
        ],
        correct: 1
    },
    {
        question: "Quel est le passe temps de Wilfried et Valeska ?",
        answers: [
            "Des fleurs",
            "Un bijou",
            "Passer les journées ensemble",
            "Un parfum"
        ],
        correct: 2
    },
    {
        question: "Quelles sont les valeurs les plus importantes pour le couple ?",
        answers: [
            "Honnêteté et confiance",
            "Amour, pardon et fidélité",
            "Respect et communication",
            "Patience et compréhension"
        ],
        correct: 1
    },
    {
        question: "Quelles sont les dates de naissance de Wilfried et Valeska ?",
        answers: [
            "15 mars et 20 août 2003",
            "20 février et 12 janvier 2004",
            "10 avril et 5 septembre 2004",
            "25 juin et 30 novembre 2003"
        ],
        correct: 1
    },
    {
        question: "Quelle est notre plus grande habitude de couple ?",
        answers: [
            "S'envoyer des messages le matin",
            "Se dire 'je t'aime' chaque soir",
            "Faire des appels vidéo"
        ],
        correct: 2
    },
    {
        question: "Quelle est la chose qu'elle aime le plus chez moi ?",
        answers: [
            "Mon sourire",
            "Ma gentillesse",
            "Mon humour"
        ],
        correct: 1
    },
    {
        question: "Qui a dit 'Je t'aime' en premier ?",
        answers: [
            "Moi",
            "Elle",
            "En même temps"
        ],
        correct: 0
    },
    {
        question: "Où avons-nous passé notre première sortie ensemble ?",
        answers: [
            "Au cinéma",
            "À l'église",
            "Dans un restaurant",
            "Dans un parc"
        ],
        correct: 1
    },
    {
        question: "Quelle est la première photo qu'on a prise ensemble ?",
        answers: [
            "Devant un restaurant",
            "À une fête",
            "En selfie"
        ],
        correct: 0
    },
    {
        question: "Quel est le cadeau qu'elle a préféré de ma part ?",
        answers: [
            "Un pack love",
            "Une peluche",
            "Des fleurs",
            "Une lettre d'amour"
        ],
        correct: 0
    },
    {
        question: "Quelle est notre activité préférée à deux ?",
        answers: [
            "Regarder des films",
            "Cuisiner ensemble",
            "Se promener main dans la main"
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let currentUser = null;

// Éléments DOM
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startQuiz');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryQuiz');

const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');

const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const finalScoreEl = document.getElementById('finalScore');
const totalScoreEl = document.getElementById('totalScore');
const resultMessage = document.getElementById('resultMessage');

// Fonctions d'authentification
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Fonctions de gestion du classement
function saveScore(userName, score, totalQuestions) {
    let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
    
    const newEntry = {
        name: userName,
        score: score,
        total: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        date: new Date().toISOString()
    };
    
    leaderboard.push(newEntry);
    
    // Trier par score décroissant
    leaderboard.sort((a, b) => b.percentage - a.percentage);
    
    // Garder seulement les 10 meilleurs scores
    leaderboard = leaderboard.slice(0, 10);
    
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
    const leaderboardContainer = document.getElementById('leaderboard');
    
    if (!leaderboardContainer) return;
    
    if (leaderboard.length === 0) {
        leaderboardContainer.innerHTML = '<p class="no-scores">Aucun score enregistré pour le moment. Soyez le premier ! 🏆</p>';
        return;
    }
    
    let html = '<h3 class="leaderboard-title">🏆 Classement des Meilleurs Scores</h3>';
    html += '<div class="leaderboard-list">';
    
    leaderboard.forEach((entry, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString('fr-FR', { 
            day: 'numeric', 
            month: 'short',
            year: 'numeric'
        });
        
        html += `
            <div class="leaderboard-item ${index < 3 ? 'top-three' : ''}">
                <span class="leaderboard-rank">${medal}</span>
                <div class="leaderboard-info">
                    <span class="leaderboard-name">${entry.name}</span>
                    <span class="leaderboard-date">${formattedDate}</span>
                </div>
                <span class="leaderboard-score">${entry.score}/${entry.total} (${entry.percentage}%)</span>
            </div>
        `;
    });
    
    html += '</div>';
    leaderboardContainer.innerHTML = html;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    currentUser = getCurrentUser();
    
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizQuestions.length;
    }
    
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', resetQuiz);
    }
    
    // Afficher le classement au chargement
    displayLeaderboard();
});

// Démarrer le quiz
function startQuiz() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
}

// Afficher une question
function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    questionText.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Mise à jour de la barre de progression
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Afficher les réponses
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

// Sélectionner une réponse (ANONYME - ne montre pas si c'est correct ou incorrect)
function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    
    // Désactiver tous les boutons
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    // Marquer le bouton sélectionné
    buttons[selectedIndex].classList.add('selected');
    
    // Vérifier si la réponse est correcte (sans l'afficher)
    if (selectedIndex === question.correct) {
        score++;
    }
    
    userAnswers.push(selectedIndex);
    
    // Afficher le bouton suivant
    nextBtn.style.display = 'block';
}

// Question suivante
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    finalScoreEl.textContent = score;
    totalScoreEl.textContent = quizQuestions.length;
    
    const percentage = (score / quizQuestions.length) * 100;
    
    // Sauvegarder le score si l'utilisateur est connecté
    if (currentUser) {
        saveScore(currentUser.name, score, quizQuestions.length);
        displayLeaderboard();
    }
    
    if (percentage === 100) {
        resultIcon.textContent = '💖';
        resultTitle.textContent = 'Parfait ! Vous êtes des âmes sœurs !';
        resultMessage.textContent = 'Vous connaissez parfaitement Wilfried et Valeska ! Leur amour est extraordinaire et leur connexion est magique. 💕';
        createHeartExplosion();
    } else if (percentage >= 70) {
        resultIcon.textContent = '❤️';
        resultTitle.textContent = 'Excellent ! Très bonne connaissance !';
        resultMessage.textContent = 'Vous connaissez très bien l\'histoire de Wilfried et Valeska ! Leur relation est solide et pleine d\'amour. 💗';
    } else if (percentage >= 50) {
        resultIcon.textContent = '💕';
        resultTitle.textContent = 'Bien ! Il y a encore des choses à découvrir !';
        resultMessage.textContent = 'Vous avez une bonne connaissance de leur histoire, mais il reste encore des secrets à découvrir sur ce beau couple ! 💝';
    } else {
        resultIcon.textContent = '💗';
        resultTitle.textContent = 'Continuez à découvrir leur histoire !';
        resultMessage.textContent = 'Explorez davantage leur site pour en apprendre plus sur cette belle histoire d\'amour de 2021 à 2025 ! 💖';
    }
}

// Réinitialiser le quiz
function resetQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
}

// Effet visuel de cœurs qui explosent
function createHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💝', '❤️'];
    const container = resultScreen;
    const rect = container.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = (rect.left + rect.width / 2) + 'px';
            heart.style.top = (rect.top + rect.height / 2) + 'px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '10000';
            
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            heart.style.animation = 'none';
            document.body.appendChild(heart);
            
            let posX = rect.left + rect.width / 2;
            let posY = rect.top + rect.height / 2;
            let opacity = 1;
            
            const animate = () => {
                posX += vx * 0.016;
                posY += vy * 0.016;
                opacity -= 0.02;
                
                heart.style.left = posX + 'px';
                heart.style.top = posY + 'px';
                heart.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    heart.remove();
                }
            };
            
            animate();
        }, i * 50);
    }
}
