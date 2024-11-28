# Dashboard Personnel 🚀

Un projet de **dashboard personnel** modulaire et personnalisable, conçu pour regrouper différentes informations et outils utiles au quotidien dans une seule interface. Ce projet exploite **Next.js 15**, un framework React moderne et performant.

## ✨ Fonctionnalités
- **Widget météo** : Visualisez les prévisions météorologiques actuelles pour une ville donnée.
- **Liste de tâches** : Gérez et suivez vos tâches quotidiennes directement depuis le dashboard.
- **Flux RSS** *(à venir)* : Récupérez les derniers articles de vos sites ou blogs favoris.
- **Tracker d’habitudes** *(à venir)* : Suivez vos routines pour améliorer votre productivité.

Chaque widget est conçu pour être entièrement configurable grâce à des variables d’environnement.

## 🎯 Objectifs du projet
1. Centraliser les informations utiles du quotidien dans une interface unique.
2. Offrir une base extensible permettant l’ajout de widgets personnalisés.
3. Servir de support pédagogique pour découvrir le développement frontend avec **Next.js 15**.

## ⚙️ Prérequis
- **Node.js** (version 14 ou plus récente)
- **Next.js** (version 15 ou plus récente)
- Un gestionnaire de paquets : npm ou yarn
- Une clé API pour les services externes utilisés (par exemple, OpenWeather pour le widget météo).

## 🚀 Installation
1. **Clonez ce dépôt** sur votre machine locale.
   ```
   git clone https://github.com/Seishiiin/personnal-dashboard.git
   cd personnal-dashboard
   ```
2. **Installez les dépendances** à l’aide de votre gestionnaire de paquets préféré.
    - Avec npm :
      ```
      npm install
      ```
    - Avec yarn :
      ```
      yarn install
      ```
3. **Configurez les variables d’environnement** :
    - Renommez `.env.example` en `.env`.
    - Ajoutez vos configurations, telles que votre clé API OpenWeather et une localisation par défaut.
4. **Lancez le projet en mode développement** en démarrant le serveur local.

## 🛠️ Structure du projet
Le projet suit une organisation modulaire, optimisée pour **Next.js 15** :
- **/app** : Contient les fichiers des routes et pages principales.
- **/components** : Widgets et éléments réutilisables.
- **/utils** : Fonctions utilitaires (APIs, manipulation des données).
- **/app/global.css** : Styles globaux, configurés avec **TailwindCSS** pour un design moderne.

## 🌟 Fonctionnement des widgets
- **Widget météo** :
    - Utilise l’API OpenWeather pour récupérer les données météorologiques.
    - La mise à jour des données peut être configurée via `getServerSideProps` ou `getStaticProps` pour des performances optimales.

- **Liste de tâches** :
    - Stockage des données en local avec `localStorage` pour une gestion simple des tâches.

## 🔮 Améliorations futures
- Mise en cache des données météorologiques avec **Incremental Static Regeneration (ISR)**.
- Notifications intégrées pour les rappels de tâches.
- Support multi-utilisateur avec des profils personnalisés.
- Intégration avec des services externes comme **Google Calendar** ou **Spotify**.
- Mode sombre natif avec **TailwindCSS**.

## 🤝 Contributions
Les contributions sont les bienvenues !  
Pour contribuer :
1. Créez une issue pour signaler un bug ou proposer une fonctionnalité.
2. Forkez le dépôt, apportez vos modifications, et soumettez un pull request.
3. Participez aux discussions dans la section dédiée sur GitHub.

## 📄 License
Ce projet est sous licence MIT. Vous êtes libre de l’utiliser, le modifier et le partager.

---

*Construit avec ❤️ et Next.js 15.*