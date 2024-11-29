# 🖥️ **Dashboard Personnel**

Un tableau de bord interactif et personnalisable, conçu pour centraliser vos informations et outils du quotidien dans une interface intuitive. Ce projet, développé avec **Next.js 15**, met l’accent sur la simplicité, la modularité et une expérience utilisateur fluide.

---

## 🌟 **Fonctionnalités principales**

- **🌦️ Widget météo :** Consultez les prévisions météo pour votre ville.
- **📝 Widget tâches :** Gérez jusqu’à trois tâches principales par jour.
- **🏋️ Widget habitudes :** Suivez vos routines quotidiennes, réinitialisées chaque jour.
- **😊 Widget humeur :** Sélectionnez votre humeur du jour et visualisez-la facilement.
- **💬 Widget citations :** Inspirez-vous avec des citations aléatoires en français.
- **🕒 Widget heure actuelle :** Consultez l’heure en temps réel.
- **📊 Widget détails météo :** Informations détaillées sur les conditions météorologiques.
- **📓 Widget notes :** Prenez des notes pour votre journée et retrouvez-les plus tard.

---

## 🎯 **Objectifs du projet**

1. Centraliser des informations et outils utiles dans une interface unique.
2. Proposer un projet accessible et facilement personnalisable pour les développeurs.
3. Favoriser la productivité avec des fonctionnalités simples, mais efficaces.
4. Offrir une base de code pédagogique pour apprendre **Next.js 15**, **TailwindCSS**, et **localStorage**.

---

## 🛠️ **Technologies utilisées**

- **Framework :** [Next.js 15](https://nextjs.org/)
- **Style :** [Tailwind CSS](https://tailwindcss.com/) pour un design moderne et réactif.
- **Icônes :** [React Icons](https://react-icons.github.io/react-icons/) pour des éléments visuels interactifs.
- **Stockage local :** `localStorage` pour persister les données côté client.

---

## 📂 **Structure du projet**

Voici l’arborescence principale du projet :
```
.
├── app/
│   ├── favicon.ico             # Favicon de l'application
│   ├── globals.css             # Styles globaux pour le projet
│   ├── layout.js               # Mise en page principale de l'application
│   └── page.js                 # Page principale du tableau de bord
├── components/
│   ├── DaySummaryWidget.js     # Widget des habitudes quotidiennes
│   ├── MoodWidget.js           # Widget de l'humeur
│   ├── NotesWidget.js          # Widget de notes
│   ├── QuotesWidget.js         # Widget de citations
│   ├── TasksWidget.js          # Widget des tâches
│   ├── Tile.js                 # Composant générique pour le style des widgets
│   ├── TimeWidget.js           # Widget de l'heure actuelle
│   ├── WeatherDetailsWidget.js # Widget des détails météo
│   └── WeatherWidget.js        # Widget météo principal

```

### **Détails importants** :

- **`/components` :** Contient tous les widgets et leurs logiques respectives. Chaque widget est un composant React autonome.
- **`/pages` :** Gestion des routes de l'application, avec `page.js` comme point d'entrée principal du tableau de bord.
- **`.env.local` :** Fichier de configuration des variables d’environnement, comme les clés API et les préférences utilisateur.
- **`tailwind.config.js` :** Permet de personnaliser les thèmes, couleurs, et plugins de Tailwind CSS.

### **Ajouter des widgets** :
Pour ajouter un nouveau widget :
1. Créez un fichier dans `/components` avec la logique et le design du widget.
2. Importez-le dans `page.js` pour l’afficher dans le tableau de bord.
3. Si nécessaire, ajoutez des variables d'environnement dans `.env.local` pour sa configuration.


---

## ✅ **Prérequis**

Avant de commencer, assurez-vous d’avoir :
- **Node.js** (version 16 ou supérieure).
- Un gestionnaire de paquets comme `npm` ou `yarn`.

---

## 🛠️ **Installation**

### 1. Cloner le projet :
```
git clone https://github.com/Seishiiin/personal-dashboard.git
cd personal-dashboard
```

### 2. Installer les dépendances :
```bash
npm install
```
ou
```bash
yarn install
```

### 3. Configurer les variables d'environnement :
Modifiez le fichier `.env.local` pour ajouter vos clés API et préférences utilisateur.
```env
NEXT_PUBLIC_WEATHER_CITY="VotreVille"
NEXT_PUBLIC_WEATHER_API_KEY="VotreCléAPI"
NEXT_PUBLIC_HABIT_1="Faire 30 minutes de sport"
NEXT_PUBLIC_HABIT_2="Lire 10 pages d’un livre"
NEXT_PUBLIC_HABIT_3="Prendre un moment de méditation"
```

### 4. Lancer l'application en mode développement :
```bash
npm run dev
```

---

## 📂 **Détails des widgets**

### **🌦️ 1. Widget météo (WeatherWidget)**
- **Description :** Consultez la météo actuelle pour une ville définie.
- **API utilisée :** [OpenWeatherMap](https://openweathermap.org/).
- **Caractéristiques :**
    - Affichage des températures, de l’icône du temps, et des prévisions.
    - Couleurs dynamiques en fonction des conditions météorologiques.
- **Variables d’environnement requises :**
    - `NEXT_PUBLIC_WEATHER_CITY` : Nom de la ville.
    - `NEXT_PUBLIC_WEATHER_API_KEY` : Clé API d’OpenWeather.

---

### **📋 2. Widget détails météo (WeatherDetailsWidget)**
- **Description :** Montre des informations détaillées sur les conditions météorologiques actuelles.
- **Caractéristiques :**
    - Affichage de l'humidité, de la vitesse du vent, et plus.
    - Design coordonné avec le widget météo principal.

---

### **📝 3. Widget tâches (TasksWidget)**
- **Description :** Gérez jusqu'à trois tâches principales par jour.
- **Caractéristiques :**
    - Ajout et suppression de tâches.
    - Validation visuelle des tâches accomplies (✅).
    - Données sauvegardées via `localStorage`.
    - Ajout rapide avec la touche **Entrée**.

---

### **🏋️ 4. Widget habitudes (DaySummaryWidget)**
- **Description :** Suivez trois habitudes définies dans `.env.local`.
- **Caractéristiques :**
    - Réinitialisation quotidienne automatique.
    - Gestion des habitudes avec des icônes interactives.
- **Variables d’environnement requises :**
    - `NEXT_PUBLIC_HABIT_1`, `NEXT_PUBLIC_HABIT_2`, `NEXT_PUBLIC_HABIT_3`.

---

### **😊 5. Widget humeur (MoodWidget)**
- **Description :** Visualisez et sélectionnez votre humeur du jour.
- **Caractéristiques :**
    - Choix entre trois options : 😊 (Heureux), 😐 (Neutre), 😔 (Triste).
    - Réinitialisation possible pour changer d'humeur.

---

### **💬 6. Widget citations (QuotesWidget)**
- **Description :** Inspirez-vous avec des citations aléatoires en français.
- **Caractéristiques :**
    - Citations statiques incluses dans le code.
    - Changement automatique à chaque rafraîchissement de la page.

---

### **📓 7. Widget notes (NotesWidget)**
- **Description :** Prenez des notes importantes pour votre journée.
- **Caractéristiques :**
    - Champ de texte ajustable pour écrire vos pensées.
    - Données persistées via `localStorage`.

---

### **🕒 8. Widget heure actuelle (TimeWidget)**
- **Description :** Affiche l'heure en temps réel, mise à jour chaque seconde.
- **Caractéristiques :**
    - Design moderne avec des transitions fluides.
    - Adapté aux couleurs du thème du dashboard.

---

## 🔮 **Améliorations possibles/futures**

1. **Support multi-utilisateurs :**
    - Ajouter un système de profils pour que chaque utilisateur ait son propre tableau de bord.

2. **Synchronisation avec des APIs tierces :**
    - Intégration avec des services comme Google Tasks, Spotify ou Google Calendar.

3. **Ajout de widgets supplémentaires :**
    - Widget de finances personnelles.
    - Widget de calendrier intégré.

4. **Personnalisation avancée :**
    - Choix des couleurs, disposition des widgets, et mode sombre activable.

---

## 🤝 **Contribuer**

Les contributions sont les bienvenues ! Pour toute suggestion, amélioration ou correction, n’hésitez pas à ouvrir une issue ou une pull request.

1. **Fork** le projet.
2. Créez une nouvelle branche pour votre fonctionnalité :
    ```bash
    git checkout -b feature/ma-fonctionnalite
    ```
3. **Commit** vos modifications :
    ```bash
    git commit -am 'Ajout de ma fonctionnalité'
    ```
4. **Push** votre branche :
    ```bash
    git push origin feature/ma-fonctionnalite
    ```
5. Créez une nouvelle **Pull Request** sur le dépôt principal.

---

## 📜 **Licence**

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

## 📞 **Contact**

Pour toute question ou suggestion, n’hésitez pas à ouvrir une issue sur le dépôt GitHub :  
[**Seishiiin/personal-dashboard**](https://github.com/Seishiiin/personal-dashboard/issues). 😊