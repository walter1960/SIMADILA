# SIMADILA Educ'Action - Site Web React

Application web moderne pour l'association caritative SIMADILA Educ'Action, optimisée pour maximiser les dons et l'engagement des visiteurs.

## 🎯 Objectif

Plateforme de donation optimisée avec une expérience utilisateur émotionnellement engageante, rassurante et fluide pour soutenir l'éducation des enfants en Afrique de l'Ouest.

## ✨ Fonctionnalités

### Pages Principales
- **Accueil** : Storytelling émotionnel, compteurs d'impact animés, témoignages d'enfants
- **Mission** : Présentation des objectifs et statistiques de l'association
- **À Propos** : Histoire et équipe de SIMADILA
- **Adhésion** : Formulaire de membership
- **Galerie** : Carousel automatique avec photos des actions terrain
- **Vidéos** : Intégration YouTube des témoignages et reportages
- **Dons** : Système de donation optimisé avec PayPal et virement bancaire
- **Contact** : Informations de contact et formulaire
- **Actualités** : Articles avec filtrage par catégorie et newsletter
- **Publications** : Documents téléchargeables (rapports, guides, statuts)
- **Services** : Appels d'offres, partenariats et politiques

### Optimisations UX/UI
- **Trust Signals** : Badges de confiance (paiement sécurisé, reçu fiscal 66%)
- **Impact Counters** : Compteurs animés au scroll (150 enfants scolarisés, 500 kits distribués)
- **Donation Amount Selector** : Montants suggérés avec impact concret
- **Transparence Financière** : Breakdown visuel des dépenses (80% terrain, 15% admin, 5% collecte)
- **Responsive Design** : Mobile-first, optimisé pour tous les écrans
- **Animations** : Scroll animations, hover effects, micro-interactions

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/walter1960/SIMADILA-MAIN.git
cd SIMADILA-MAIN

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 🛠️ Technologies

- **React 18** : Framework JavaScript moderne
- **Vite** : Build tool ultra-rapide
- **React Router** : Navigation client-side
- **PayPal SDK** : Intégration paiement en ligne
- **CSS3** : Animations et responsive design
- **FontAwesome** : Iconographie

## 📁 Structure du Projet

```
SIMADILA_REACT/
├── public/              # Assets statiques (images, vidéos)
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Carousel.jsx
│   │   ├── TrustSignals.jsx
│   │   ├── ImpactCounter.jsx
│   │   └── DonationAmountSelector.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Mission.jsx
│   │   ├── About.jsx
│   │   ├── Join.jsx
│   │   ├── Gallery.jsx
│   │   ├── Videos.jsx
│   │   ├── Donate.jsx
│   │   ├── Contact.jsx
│   │   ├── News.jsx
│   │   ├── Publications.jsx
│   │   └── Services.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── styles/         # Fichiers CSS
│   │   ├── App.css
│   │   └── UXOptimizations.css
│   ├── App.jsx         # Configuration routing
│   └── main.jsx        # Point d'entrée
├── legacy/             # Ancien site statique (référence)
└── package.json
```

## 🎨 Design System

### Couleurs
- **Primaire** : `#2c5530` (Vert foncé)
- **Secondaire** : `#4a9d4f` (Vert clair)
- **Accent** : `#ffd700` (Or)
- **Light** : `#f8f9fa`
- **Dark** : `#212529`

### Typographie
- **Titres** : Montserrat (700)
- **Corps** : Open Sans (400, 600)

## 📊 Optimisations UX

### Parcours de Don
1. **Découverte émotionnelle** : Storytelling, témoignages
2. **Engagement** : Compteurs d'impact, preuves sociales
3. **Conversion** : Montants suggérés, trust signals
4. **Confirmation** : Message de gratitude, impact du don

### Psychologie Utilisateur
- ✅ Connexion émotionnelle (témoignages d'enfants)
- ✅ Preuve d'impact (chiffres concrets, rapports publics)
- ✅ Réduction de la charge cognitive (montants suggérés)
- ✅ Confiance renforcée (badges, transparence financière)

## 🌍 Déploiement

Le site peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Drag & drop du dossier `dist`
- **GitHub Pages** : Configuration dans les settings du repo

## 📝 License

© 2026 SIMADILA Educ'Action - Tous droits réservés

## 👥 Contact

- **Email** : contact@simadila.org
- **Téléphone** : +33 7 50 61 37 35
- **Adresse** : Paris, France (Siège) / Dakar, Sénégal (Antenne)

---

**Fait avec ❤️ pour l'éducation des enfants d'Afrique de l'Ouest**
