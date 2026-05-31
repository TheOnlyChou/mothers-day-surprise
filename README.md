# Bonne fête maman

Un site interactif en HTML, CSS et JavaScript pour la fête des mères.

## Fonctionnalités

- cadeau animé ;
- enveloppe animée ;
- lettre qui sort de l’enveloppe ;
- message personnel ;
- mascotte Chiikawa dans l’enveloppe et la question finale ;
- question finale avec boutons Oui / Non ;
- confettis et bon cadeau final.

## Structure

```txt
.
├── index.html
├── css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── responsive.css
│   └── components
│       ├── buttons.css
│       ├── envelope.css
│       ├── chiikawa.css
│       ├── final.css
│       ├── gift.css
│       └── letter.css
└── js
    ├── config.js
    ├── confetti.js
    ├── dom.js
    ├── envelope.js
    ├── gift.js
    ├── main.js
    ├── question.js
    ├── scenes.js
    └── utils.js
```

## Modifier le texte

La lettre se modifie directement dans `index.html`, dans la section :

```html
<section class="scene scene-letter" data-scene="3">
```

## Modifier les messages du bouton Non

Les messages sont dans :

```txt
js/config.js
```

## Images utilisées

Le projet utilise les images suivantes dans le dossier img/ :

- chiikawa_thinking.gif : mascotte dans la scène de question.
- chikawa_love_letter.gif : mascotte près de l’enveloppe.
- chikawa_love.png : image décorative dans l’introduction.
- chikawa_sad_angry.jpg : réaction quand on clique sur "Non".
- chikawa_thumbs_up.jpg : image de validation dans la scène finale.

Les images JPG/PNG non détourées sont volontairement placées dans des cartes arrondies pour garder un rendu propre.

## Lancer le projet

Ouvre simplement `index.html` dans un navigateur.
