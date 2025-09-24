//! Base de l'interaction avec le DOM 
//! Document Object Model => toutes les données contenues dans votre page Web
// Gigantesque objet dans lequel on trouveras toutes les infos relatives à la page

//*window est un objet qui représente toute votre fenêtre de navigateur et qui peut utile pour récupérer des infos commes :
// - sur quel navigateur est l'utilisateur
// - les extensions utilisées (ex: Adblock, lecteur écran, ...)
// - sa localisation 
// - la langue de son navigateur
// - sa préférence de thème
// - l'url actuelle (?)

//* Document est un objet qui représente toute la page HTML


// Comme la page n'as qu'un title on peut le modifier directement depuis document.title, idem avec Body 
document.title  = 'OK boomer';

// ! mais pour éléments précis, pas garanti qu'il n'y en ai qu'un seul dans la page HTML (div, ...)
//? Plusieurs méthodes

//! By Id, qu'on va bcp utiliser
//* le fait de stocker l'élement HTML dans une const permet de ne pas prendre le risque de le supprimer 
const DIV_DEMO1 = document.getElementById ('demo'); 
console.log(DIV_DEMO1);

const DIV_DEMO2 = document.getElementById ('demo2'); 
console.log(DIV_DEMO2);

//! Modifier / consulter le contenu (textuel) d'un element en HTML
//* ⚠️ on ne pourrait le faire que sur les balises par pair
// InnerText ou textContent
DIV_DEMO1.innerText = 'Première modif';
DIV_DEMO1.textContent = 'Deuxieme modif';
DIV_DEMO1.innerHTML = 'Troisième modif';

//* Ajouter une événement
const DIV_MEME = document.getElementById ('divMeme')
const BTN_ARROSER = document.getElementById ('arroser')
const DIV_PLANTE = document.getElementById ('plante')

// pour ajouter une gestion d'évenement sur notre élément HTML on ajoute un addEventListener, un écouteur d'évenement 
//cette methode demande deux infos :
// le type d'event (string)
// le code à exécuter (fonction) --> ici fonction anonyme


BTN_ARROSER.addEventListener('click',() => {
DIV_PLANTE.textContent = '🌳';
});


//* Modifier les classes

const DIV_JOUR = document.getElementById('jour')
const BTN_INVERSER = document.getElementById('inverser')

BTN_INVERSER.addEventListener('click',() => {
DIV_JOUR.classList.toggle('jour');
DIV_JOUR.classList.toggle('nuit');

});

//* Modifier le style d'une balise (à n'utiliser qu'en cas de besoin)
const BTN_COMBIEN = document.getElementById ('combien');
const DIV_JAUGE = document.getElementById ('jauge');

BTN_COMBIEN.addEventListener('click',() => {
    let note = prompt ('Tu te mets combien ?');
    DIV_JAUGE.style.width = note + '%'
});

//* Modifier les attributs

const P_NOUS = document.getElementById ('nous');
const IMG_NOUS = document.getElementById ('nous_img');
const BTN_FIN_FORMATION = document.getElementById ('fin_formation');

BTN_FIN_FORMATION.addEventListener('click', () => {
    P_NOUS.textContent = "Nous à la fin de la formation"
    IMG_NOUS.src = 'nousApres.jpg' ;
    IMG_NOUS.alt = 'genie';

});

//* Consulter/modifier les valeurs d'un champs

const INPUT_TECHNO = document.getElementById ('techno');
const BTN_VALIDER = document.getElementById ('valider');
const P_RESULTAT = document.getElementById ('resultat');

BTN_VALIDER.addEventListener('click',() => {
    // récupere la valeur dans l'input
let techno=INPUT_TECHNO.value;

P_RESULTAT.textContent = `Oh tu aimes ${techno}, moi aussi! Trop marrant non?`

INPUT_TECHNO.value = ''; //'' chaine vide

})