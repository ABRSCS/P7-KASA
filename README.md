# Kasa – Plateforme de location d’appartements

Projet 7 du parcours Développeur Front-End (OpenClassrooms)

## 🚀 Présentation

Kasa est une application web de location d’appartements entre particuliers. Elle permet de parcourir des annonces, de consulter les détails de chaque logement, d’afficher les notes et de naviguer facilement grâce à une interface moderne et responsive.

## 🏗️ Structure du projet

```
/public
  └── index.html
  └── vite.svg

/src
  ├── assets/images
  ├── components
  │   ├── Banner
  │   ├── Card
  │   ├── CardContainer
  │   ├── Collapse
  │   ├── Footer
  │   ├── Header
  │   ├── Slideshow
  │   └── StarRating
  ├── data/logements.json
  ├── pages
  │   ├── About
  │   ├── Accommodation
  │   ├── Error
  │   └── Home
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── main.css
```

## ✨ Fonctionnalités principales

- **Accueil** : Liste des logements sous forme de cartes.
- **Page logement** : Détails complets d’un logement, galerie photos, description, équipements, notes, etc.
- **Page À propos** : Présentation de Kasa et de ses valeurs.
- **Navigation** : Header et Footer présents sur toutes les pages.
- **Gestion des erreurs** : Page 404 personnalisée.
- **Responsive** : Application adaptée à tous les écrans.
- **Accessibilité** : Utilisation de composants accessibles (collapse, slideshow...).

## 🛠️ Technologies utilisées

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules
- Font Awesome (icônes)
- Google Fonts (Montserrat)

## ⚡ Installation et lancement

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/TON-UTILISATEUR/kasa.git
   cd kasa
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L’application sera accessible à l’adresse [http://localhost:5173](http://localhost:5173) par défaut.

## 📁 Données

Les logements sont stockés dans le fichier :
```
/src/data/logements.json
```


## 👤 Auteur

- Alexia – [profil GitHub](https://github.com/ABRSCS)

## 📄 Licence

Ce projet est réalisé dans un cadre pédagogique.
