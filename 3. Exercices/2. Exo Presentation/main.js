//! 1) Récupérer tous les éléments dont vous avez besoin pour votre algo
const BTN_VALIDER = document.getElementById('valider');

const INPUT_PRENOM = document.getElementById('prenom');
const INPUT_NOM = document.getElementById('nom');
const INPUT_AGE = document.getElementById('age');
const INPUT_IMG_URL = document.getElementById('img-url');

const IMAGE = document.getElementById('image');
const P_RESULTAT = document.getElementById('resultat');

const BTN_CLAIR = document.getElementById('clair');
const BTN_SOMBRE = document.getElementById('sombre');
const BTN_CUSTOM = document.getElementById('custom');
const DIV_BOX1 = document.getElementById('box1');
const DIV_BOX2 = document.getElementById('box2');


//! 2) Logique d'évènement
BTN_VALIDER.addEventListener('click', () => {
    // ? Récupérer
    const prenom = INPUT_PRENOM.value;
    const nom = INPUT_NOM.value;
    const age = INPUT_AGE.valueAsNumber; /* converti direct en nombre la value mais utilisable uniquement si input type number */
    const url = INPUT_IMG_URL.value;
    
    // ? Insérer dans la partie droite
    P_RESULTAT.textContent = `Bonjour, je m'appelle ${prenom} ${nom} et je vais avoir ${age + 1} ans`;

    IMAGE.setAttribute('src', url);
    IMAGE.alt = `image choisie par ${prenom}`;

    // INPUT_PRENOM.value = '';
    // INPUT_NOM.value = '';
    // INPUT_AGE.value = '';
    // INPUT_IMG_URL.value = '';

    // Si on récupère le formulaire, on peut le reset tout d'un coup avec cette fonction
    const FORM = document.getElementById('formulaire');
    FORM.reset();

})

BTN_CLAIR.addEventListener('click', () => {
    // Enlever le style inline : version cracra
    DIV_BOX1.style = '';
    // version propre
    DIV_BOX2.removeAttribute('style');

    // Enlever l'autre classe
    DIV_BOX1.classList.remove('sombre');
    DIV_BOX2.classList.remove('sombre');

    // Ajouter la bonne classe
    DIV_BOX1.classList.add('clair');
    DIV_BOX2.classList.add('clair');
})

BTN_SOMBRE.addEventListener('click', () => {
    // Enlever le style inline : version cracra
    DIV_BOX1.style = '';
    // version propre
    DIV_BOX2.removeAttribute('style');

    // Enlever l'autre classe
    DIV_BOX1.classList.remove('clair');
    DIV_BOX2.classList.remove('clair');

    //Ajouter la bonne classe
    DIV_BOX1.classList.add('sombre');
    DIV_BOX2.classList.add('sombre');
})

BTN_CUSTOM.addEventListener('click', () => {
    // On demande à l'utilisateur des couleurs et on les stocke dans une variable
    const BG_COLOR = prompt("Entrez une couleur de fond (nom de couleur css, hexa avec le #, ou rgb mais bien écrit stp)");
    const TXT_COLOR = prompt("Entrez une couleur de texte (nom de couleur css, hexa avec le #, ou rgb mais bien écrit stp)");

    // Grâce au style inline, on utilise ces couleurs
    DIV_BOX1.style.backgroundColor = BG_COLOR;
    DIV_BOX1.style.color = TXT_COLOR;
    
    DIV_BOX2.style.backgroundColor = BG_COLOR;
    DIV_BOX2.style.color = TXT_COLOR;
})


