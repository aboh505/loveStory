# 💕 Site Web d'Histoire d'Amour - Wilfried & Valeska

Un magnifique site web romantique pour retracer votre histoire d'amour, créé avec HTML, CSS et JavaScript.

## ✨ Fonctionnalités

### Pages du site :
1. **Accueil** - Section hero pleine largeur avec image de fond
2. **Notre Rencontre** - L'histoire de 2021 à 2025 au Lycée Bilingue de Deiod
3. **Moments Forts** - Cartes horizontales des dates importantes et anecdotes
4. **Authentification** - Système d'inscription et connexion pour accéder à l'album
5. **Album Photo** - Galerie interactive avec petites cartes (accès protégé)
6. **Détail Photo** - Page détaillée pour chaque photo avec description créative
7. **Système de Commentaires** - Commentez, likez, modifiez et supprimez vos commentaires
8. **Quiz d'Amour** - Quiz romantique personnalisé pour tester vos connaissances

### Fonctionnalités avancées :
- 🔒 **Authentification** : Inscription et connexion requises pour l'album
- 📝 **Commentaires** : Système complet avec like, modification et suppression
- 💾 **Stockage local** : Toutes les données sont stockées dans le navigateur
- 📸 **Pages de détail** : Chaque photo a sa propre page avec description unique
- 👤 **Gestion utilisateur** : Affichage du nom d'utilisateur et déconnexion

## 🎨 Design

- **Couleurs** : Rose pâle (#ffb6c1), Blanc rosé (#fff0f5), Rouge doux (#f08080)
- **Polices** : Dancing Script, Poppins, Great Vibes
- **Icônes** : Cœurs ❤, Fleurs 🌸, Étoiles ⭐
- **Animations** : Effets fade-in, cœurs flottants, transitions douces

## 📁 Structure du Projet

```
love/
├── index.html          # Page d'accueil
├── rencontre.html      # Page Notre Rencontre
├── moments.html        # Page Moments Forts
├── album.html          # Page Album Photo
├── quiz.html           # Page Quiz d'Amour
├── styles.css          # Styles CSS
├── script.js           # JavaScript principal
├── quiz.js             # JavaScript du quiz
├── images/             # Dossier pour vos photos
│   ├── couple.jpg
│   ├── first-meeting.jpg
│   ├── first-date.jpg
│   ├── anniversary.jpg
│   ├── travel.jpg
│   └── photo1-8.jpg
├── videos/             # Dossier pour vos vidéos
│   ├── video1.mp4
│   └── video2.mp4
└── README.md           # Ce fichier
```

## 🚀 Installation et Utilisation

### 1. Ajouter vos photos et vidéos

Placez vos photos dans le dossier `images/` avec les noms suivants :
- `couple.jpg` - Photo de couple pour la page d'accueil
- `first-meeting.jpg` - Photo de votre première rencontre
- `first-date.jpg` - Photo de votre premier rendez-vous
- `anniversary.jpg` - Photo d'anniversaire
- `travel.jpg` - Photo de voyage
- `photo1.jpg` à `photo8.jpg` - Photos pour l'album

Placez vos vidéos dans le dossier `videos/` :
- `video1.mp4` - Première vidéo souvenir
- `video2.mp4` - Deuxième vidéo souvenir

**Note** : Si vous n'avez pas encore de photos, le site affichera des placeholders avec des cœurs 💕

### 2. Ouvrir le site

Ouvrez simplement `index.html` dans votre navigateur web préféré !

Ou utilisez un serveur local :
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

## 🎯 Personnalisation

### Modifier les textes
- Éditez les fichiers HTML pour personnaliser les histoires et anecdotes
- Changez les citations dans `moments.html`
- Personnalisez les questions du quiz dans `quiz.js`

### Modifier les couleurs
Dans `styles.css`, modifiez les variables CSS :
```css
:root {
    --rose-pale: #ffb6c1;
    --blanc-rose: #fff0f5;
    --rouge-doux: #f08080;
    --rose-fonce: #ff69b4;
}
```

### Ajouter plus de photos
Dans `album.html`, dupliquez une `gallery-item` et modifiez :
- L'attribut `data-category` (couple, voyage, ou special)
- Le chemin de l'image
- Le titre et la description

## 💖 Fonctionnalités Interactives

- **Cœurs flottants** : Animation de cœurs en arrière-plan
- **Galerie photo** : Cliquez sur une photo pour l'agrandir
- **Filtres d'album** : Filtrez les photos par catégorie
- **Quiz interactif** : Testez vos connaissances avec un score final
- **Animations douces** : Effets fade-in au scroll
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)

## 🎁 Conseils pour un résultat optimal

1. **Photos** : Utilisez des images de haute qualité (minimum 1000x1000 pixels)
2. **Vidéos** : Compressez vos vidéos pour un chargement rapide (format MP4 recommandé)
3. **Histoires** : Soyez authentiques et personnels dans vos textes
4. **Quiz** : Personnalisez les questions avec vos vrais souvenirs

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ Mobile et tablette (responsive design)
- ✅ Pas de dépendances externes (fonctionne hors ligne)

## 💝 Fait avec amour

Ce site a été créé spécialement pour Wilfried & Valeska pour célébrer leur belle histoire d'amour.

---

**Profitez de votre site et de votre amour ! 💕✨**
