# Première application React avec Vite — Mes projets

*ServicesWeb · Énoncé étudiant*

Créez un petit portfolio qui présente **deux projets personnels ou scolaires**. Vous pouvez choisir des projets réalisés ou des idées que vous aimeriez développer. Chaque projet est décrit par son titre, les technologies utilisées et un court descriptif.

Cette première application vous permet de pratiquer les composants, les props, `children`, le CSS global et les CSS Modules.

## 1. Créer le projet

Dans le terminal de VS Code, placez-vous dans le dossier où vous rangez vos projets, puis lancez les commandes suivantes.

```bash
npm create vite@latest mes-projets -- --template react
cd mes-projets
npm install
npm run dev
```

La première commande prépare un projet React en JavaScript. Ouvrez l’adresse locale affichée par Vite pour consulter la page.

## 2. Préparer le contenu

La page contient le titre « Mes projets », deux cartes de projet et un encadré avec un court paragraphe de présentation personnelle.

Pour chaque projet, choisissez trois informations. Voici des exemples que vous pouvez adapter.

| Titre du projet | Technologies utilisées | Descriptif |
| --- | --- | --- |
| Mon site personnel | HTML, CSS | Un site qui présente mes intérêts et mes réalisations. |
| Ma liste de tâches | JavaScript, HTML, CSS | Une petite application pour organiser les tâches de la semaine. |

Pour commencer, écrivez les technologies sous la forme d’une chaîne de caractères, comme `"HTML, CSS, JavaScript"`. Écrivez directement deux utilisations du composant de carte dans le JSX d’`App`.

## 3. Créer trois composants

| Composant | Travail à réaliser |
| --- | --- |
| `App` | Afficher le titre principal et assembler les deux cartes et l’encadré. |
| `CarteProjet` | Recevoir les props `titre`, `technologies` et `description`, puis afficher une carte. |
| `Encadre` | Recevoir `children` et afficher ce contenu dans un conteneur visuellement encadré. |

Placez `CarteProjet` et `Encadre` dans leurs propres fichiers. Exportez-les et importez-les dans `App.jsx`.

### Passer les props à CarteProjet

Dans `App`, fournissez les trois informations à chaque carte. L’utilisation d’un composant peut prendre cette forme.

```jsx
<CarteProjet
  titre="Mon site personnel"
  technologies="HTML, CSS"
  description="Un site qui présente mes intérêts et mes réalisations."
/>
```

À vous d’écrire `CarteProjet` pour lire ces props et les afficher dans un élément `article`. Le titre du projet apparaît dans un `h2`, suivi des technologies et du descriptif dans deux paragraphes. Utilisez ensuite ce même composant pour le second projet avec des valeurs différentes.

### Utiliser children dans Encadre

Dans `App`, écrivez votre paragraphe de présentation entre les balises ouvrante et fermante d’`Encadre`. Dans le composant `Encadre`, récupérez la prop `children` et placez `{children}` dans le conteneur retourné.

Le texte est ainsi choisi par `App`, tandis que `Encadre` fournit la structure qui l’entoure.

## 4. Appliquer les styles

Utilisez votre connaissance du CSS pour donner une présentation lisible à la page.

| Fichier | Styles à définir | Chargement |
| --- | --- | --- |
| `index.css` | La police, le fond de page, les marges et une classe `.encadre` pour la présentation personnelle. | Importer la feuille dans `main.jsx`. |
| `CarteProjet.module.css` | L’apparence des cartes et de leur titre, avec les classes locales `.carte` et `.titre`. | Importer le module dans `CarteProjet.jsx` et utiliser `styles.carte` et `styles.titre` dans `className`. |

Dans `Encadre`, appliquez la classe globale `encadre` au conteneur. Choisissez les couleurs, les espacements et la disposition des deux cartes.

Vous pouvez placer tous vos fichiers directement dans `src/` pour cette première application.

| Fichier dans src/ | Rôle |
| --- | --- |
| `main.jsx` | Monter `App` et charger le CSS global. |
| `App.jsx` | Composer la page et fournir les données des projets. |
| `CarteProjet.jsx` | Définir la carte réutilisable. |
| `CarteProjet.module.css` | Définir ses classes locales. |
| `Encadre.jsx` | Afficher le contenu reçu dans `children`. |
| `index.css` | Définir les styles globaux. |

## 5. Préparer la remise

Préparez votre projet Vite et ajoutez un `README.md` qui indique les commandes pour installer les dépendances et lancer l’application. En quelques phrases, expliquez aussi quelles informations passent par les props de `CarteProjet` et quel contenu passe par `children`.

Vérifiez enfin que la construction du projet se termine correctement.

```bash
npm run build
```

## Vérifier votre travail

- [ ] La page affiche deux projets avec un titre, les technologies utilisées et un descriptif.
- [ ] Les deux cartes utilisent le même composant `CarteProjet`.
- [ ] `CarteProjet` affiche les valeurs reçues dans ses trois props.
- [ ] `Encadre` affiche le paragraphe fourni par `App` dans `children`.
- [ ] `index.css` définit la présentation globale et le style de l’encadré.
- [ ] `CarteProjet.module.css` définit les classes locales utilisées par les cartes.
- [ ] L’application démarre, la construction réussit et le `README.md` explique le lancement.
