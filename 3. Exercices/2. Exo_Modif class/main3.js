

// ==========================================
// Récupérer les éléments HTML
// =========================================

//* Etape 1 : Récupérer les champs de saisie (inputs de Prenom, Nom et Age)
const INPUT_FORNAME = document.getElementById('userForname');
const INPUT_LASTNAME = document.getElementById('userLastname');
const INPUT_AGE = document.getElementById('userAge'); //* mettre let plutôt que const ? 

//* Etape 2 : Récupérer le champs de saisie pour l'image (imput URL)
const INPUT_URL = document.getElementById('userUrl');

//* Récupérer élements d'affichage et d'action
const BTN_VALIDER = document.getElementById('valider');
const P_RESULTAT_TXT = document.getElementById('resultatTxt');
const RESULTAT_IMG = document.getElementById('userImg');

// ==========================================
// addEventListener
// ==========================================

//* addEventListener('click', fonction) = "Quand on clique sur ce bouton (Valider), exécute les fonctions suivantes" */

BTN_VALIDER.addEventListener('click', () => {

    //* 1. Récupérer les valeurs des l'inputs avec l'attribut value 
    const userForname = INPUT_FORNAME.value;
    const userLastname = INPUT_LASTNAME.value;
    const userAge = INPUT_AGE.valueAsNumber; //* pour convertir l'age en nombre
    userAge++;
    //* 2. récupérer la valeur actuellement dans l'input avec l'attribut value
    const userImg = INPUT_URL.value;

    // ==========================================
    // AFFICHAGE DU TEXTE DE RÉSULTAT
    // ==========================================

    //* .textContent modifie le contenu textuel d'un élément HTML
    //* backticks pour interpolation de chaine 
    P_RESULTAT_TXT.textContent = `Bonjour, je m'appelle ${userForname} ${userLastname}, et je vais avoir ${userAge} ans ! `;



    //*  .src modifie l'attribut "src" de l'élément <img>, qui est vide dans le HTML

    RESULTAT_IMG.src = `${userImg} `;

    //? Ne marche pos avec https://cdn.omlet.com/images/originals/Texel-Guinea-Pig.jpg :((
    //? Erreur : Cross-Origin Read Blocking (CORB) (CORS)
    //? okay avec https://www.petopets.com/cdn/shop/products/tex_2048x2048.jpg?v=1654724850

    //* Autre 
    INPUT_FORNAME.value = ''; //?  recopié de la démo mais pas compris
    INPUT_LASTNAME.value = '';
    INPUT_AGE.value = '';
    INPUT_URL.value = '';

});

// ==========================================
// THEMES CLAIR/SOMBRE
//  ==========================================



// //! Modifier les classes
// const DIV_JOUR = document.getElementById('jour');
// const BTN_INVERSER = document.getElementById('inverser');

// BTN_INVERSER.addEventListener('click', () => {
// classList vous donne la liste des class de l'élément
//* Nous avons accès ensuite à 4 méthodes
//* classList.add('nomClass') -> ajoute la classe
//* classList.remove('nomClass') -> retire la classe
//* classList.contains('nomClass') -> renvoie un booléen pour savoir si la classe est présente ou non
//* classList.toggle('nonClass') -> supprime la classe si présente sinon, l'ajoute
//     DIV_JOUR.classList.toggle('jour');
//     DIV_JOUR.classList.toggle('nuit');

// });


// const DIV_BODY = document.getElementById('body');
const BTN_LIGHTTHEME = document.getElementById('lightTheme');
const BTN_DARKTHEME = document.getElementById('darkTheme');


BTN_LIGHTTHEME.addEventListener('click', () => {
    DIV_BODY.classList.toggle('lightTheme');
    DIV_BODY.classList.toggle('darkTheme');
    // DIV_BODY.classList.add('lightTheme');

});

BTN_DARKTHEME.addEventListener('click', () => {
    DIV_BODY.classList.toggle('darkTheme');
    // DIV_BODY.classList.add('darkTheme');

});



// ==========================================
// CHOIX Couleur THEME 
// =========================================

//* Pour ajouter une gestion d'évènement sur notre élement HTML, on va lui ajouter un EventListener, un écouteur d'évènement
//* cette méthode addEventListener demande 2 infos
//* le type d'event (string)
//* le code à exécuter (fonction) (ici, une fonction anonyme)
//* () => {} fonction anonyme
//* BTN_ARROSER.addEventListener('click', () => {
    //* dans les {} on rajoute tout le code qu'on veut exécuter lors du click
    //* ici, au click, un arbre apparaitra à la place de la pousse dans la div qui porte l'id plante
//*     DIV_PLANTE.textContent = '🌲';
//* });


const DIV_BODY = document.getElementById('body');
const BTN_OTHERTHEME = document.getElementById('otherTheme');

BTN_OTHERTHEME.addEventListener("click", () => {
    const bg = prompt('On va changer la couleur de fond, donne-moi une couleur que tu aimes en hexadecimal : ')
    //! Comment enchainer les deux prompt?
    const txt = prompt('Dis donc, tu as vraiment du gout, choisis donc une autre couleur pour le texte maintenant : ');
    // ! Comment identifier valeur du champs rempli dans le prompt la récupérer? 
    DIV_BODY.style.backgroundColor = '#'+bg; 
    DIV_BODY.style.color = '#'+txt;

});




