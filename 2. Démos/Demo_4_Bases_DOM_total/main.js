//! Bases de l'intéraction avec le DOM
//! Document Object Model -> Représente les données contenues dans votre page Web
// C'est un gigantesque objet dans lequel on trouvera toutes les informations relatives à la page
// * window est un objet qui représente toute votre fenêtre de navigateur et qui peut être utile pour récupérer des informations comme :
// - sur quel navigateur est l'utilisateur
// - les extensions installées par l'utilisateur
// - la localisation 
// - la langue de son navigateur
// - sa préférence de thème
// - l'url actuelle
// - ...

// * document est un objet qui représente toute la page html
// ? (c'est lui qui nous intéresse pour le moment)
// Comme votre page, ne possède qu'un seul title (le texte dans l'onglet), on peut directement le modifier depuis l'objet document
document.title = 'Base Manip Dom';
// le body étant aussi unique, je peux y accéder directement depuis document
//document.body

// ! Si par contre on veut récupérer un/des élément/s précis dans la page, ce n'est pas garanti qu'il n'y en ai qu'un seul ni qu'il existe
// Dans ces cas là, on va devoir utiliser des méthodes (fonction) pour pouvoir récupérer des éléments html présents dans la page
// ? Il existe plusieurs méthodes pour récupérer un élément HTML
// ! Celui qu'on va le plus utiliser ces prochains jours : Via l'id de l'élément html qu'on veut récupérer
// la méthode document.getElementById('nomId') récupère l'élément html qui correspond à l'id
// on devra alors le stocker dans une variable pour l'utiliser ensuite
// Cette méthode, si je mets un id qui n'existe pas dans la page, va me renvoyer la valeur null puisqu'elle n'aura pas trouvé d'élément HTML
const DIV_EX1_RATE = document.getElementById('example-1');
console.log(DIV_EX1_RATE); //contient null puisqu'on a fait une faute dans le nom de l'id

const DIV_EX1 = document.getElementById('exemple-1');
console.log(DIV_EX1); //contient un objet qui représente la balise html

// ! Il existe cependant d'autres façons de récupérer mais qui récupère des listes d'éléments (tableaux)
// Pour récupérer via la classe
const TOUS_LES_ELEMENTS_BLEUS = document.querySelectorAll('.blue');
// Pour récupérer via le nom de la balise
const TOUS_LES_LIENS = document.querySelectorAll('a');
// dans la nav qui possède la classe main je veux récupérer uniquement les li qui sont impairs (don't panic on reverra les selecteurs css et ce sera rare de les utiliser comme ça)
const BLOUB = document.querySelectorAll('nav.main li:nth-of-type(odd)');

//! Consulter/Modifier le contenu (textuel) d'un élément HTML
// * ⚠️ on ne pourra le faire que sur les balises par paires
// innerText ou textContent
console.log(DIV_EX1.innerText);
console.log(DIV_EX1.textContent);

DIV_EX1.innerText = 'Première modification du texte';
DIV_EX1.textContent = 'Deuxième modification du texte';

// innerHTML
console.log(DIV_EX1.innerHTML);
DIV_EX1.innerHTML = 'Troisième modification du texte';

// Quelle différence entre innerText/texteContent et innerHTML
DIV_EX1.textContent = '<p> 4ème modif </p>'; //ne fera pas le rendu de votre paragraphe (ne fait pas de rendu HTML)
DIV_EX1.innerHTML = '<p> 5ème modif </p>'; //fera le rendu HTML
// ! Attention, innerHTML peut amener à de l'injection de code
// admettons, je fais une requête pour avoir le nom de mon utilisateur
let userName = '<a href="https//virus.com">Aude</a>';
// Je veux lui dire bonjour dans mon site
DIV_EX1.innerHTML = `Bienvenue ${userName} !`;
// quand nos données viennent de l'exétieur, on fait attention à ce qu'on fait et on évite le innerHTML

// Attention dans l'autre sens :
// let commentaire = 'Top bien votre restau, j \'adore !'; //on reçoit un commentaire qui provient de notre API/base de données
let commentaire = 'Hinhinhin 🧌 <img src="https://i.pinimg.com/200x150/8a/cc/93/8acc9364ff61a6a92a54addae6ea1119.jpg" width="200px" alt="le restau était dégueulasse !" />'; 
// DIV_EX1.innerHTML = commentaire;

//! Ajouter un évènement
const DIV_PLANTE = document.getElementById('plante');
const BTN_ARROSER = document.getElementById('arroser');

// Pour ajouter une gestion d'évènement sur notre élement HTML, on va lui ajouter un EventListener, un écouteur d'évènement
// cette méthode addEventListener demande 2 infos
// le type d'event (string)
// le code à exécuter (fonction) (ici, une fonction anonyme)
// () => {} fonction anonyme
BTN_ARROSER.addEventListener('click', () => {
    // dans les {} on rajoute tout le code qu'on veut exécuter lors du click
    // ici, au click, un arbre apparaitra à la place de la pousse dans la div qui porte l'id plante
    DIV_PLANTE.textContent = '🌲';
});

//! Modifier les classes
const DIV_JOUR = document.getElementById('jour');
const BTN_INVERSER = document.getElementById('inverser');

BTN_INVERSER.addEventListener('click', () => {
    // classList vous donne la liste des class de l'élément
    // Nous avons accès ensuite à 4 méthodes
    // classList.add('nomClass') -> ajoute la classe
    // classList.remove('nomClass') -> retire la classe
    // classList.contains('nomClass') -> renvoie un booléen pour savoir si la classe est présente ou non
    // classList.toggle('nonClass') -> supprime la classe si présente sinon, l'ajoute
    DIV_JOUR.classList.toggle('jour');
    DIV_JOUR.classList.toggle('nuit');

    //On ne peut pas encore changer le texte, il faut une condition en fait 😔

});

// ! Modifier le style d'une balise (à n'utiliser qu'en cas de besoin)
const BTN_COMBIEN = document.getElementById('combien');
const DIV_JAUGE = document.getElementById('jauge');

BTN_COMBIEN.addEventListener('click', () => {
   let note = prompt('Tu te mets combien en Javascript sur 100 ?');
   
   //on modifie la taille de la div jauge pour qu'elle soit égale à la note de l'utilisateur
   DIV_JAUGE.style.width = note + '%';
});

//! Modifier les attributs html
const P_VOUS = document.getElementById('vous');
const IMG_VOUS = document.getElementById('vous-img');
const BTN_FINIR = document.getElementById('finir');

BTN_FINIR.addEventListener('click', () => {
    P_VOUS.textContent = 'Vous à la fin de journée :';

    // Pour modifier l'attribut html d'un élément, juste à l'appeler avec le .
    IMG_VOUS.src = 'https://en.meming.world/images/en/d/d0/Crying_Cat.jpg';
    IMG_VOUS.alt = 'plus happy cat';

});

//! Consulter/Modifier la valeur d'un champs
const INPUT_TECHNO = document.getElementById('techno');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULTAT = document.getElementById('resultat');

BTN_VALIDER.addEventListener('click', () => {
    //récupérer la valeur actuellement dans l'input
    //Pour récupérer la valeur qui se trouve dans un input, on utilise son attribut value
    // Cependant UNE exception checkbox, où on recupèrera le booléen vrai ou faux grâce à checked
    // ! value vous donnera toujours ce qui est dans l'input mais sous forme de chaine
    // Il existe du coup, pour les input type number, valueAsNumber qui convertit automatiquement la valeur en nombre 
    let techno = INPUT_TECHNO.value;

    //afficher la valeur dans le paragraphe
    P_RESULTAT.textContent = `Oh tu aimes ${techno} ?!?! Moi aussi hihihi`;

    INPUT_TECHNO.value = ''; //'' chaine vide
});





