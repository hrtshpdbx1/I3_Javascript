//! Avant il n'existait que le mot clef var pour déclarer une variable (dans des vieux tuto vous risquez de le rencontrer ou notre bon ami ChatGPT risque de vous le sortir vu qu'il lit bcp de vieux code)
// Maintenant il en existe 2 nouveaux plus précis let & const. Ces deux là sont à privilégier. 

//? let sera utilisé pour toute variable à laquelle, on veut plus tard, réassigner une nouvelle valeur
let prixArticle;
let somme = 0;
somme = somme + 42;

//? const sera utilisé pour une variable à laquelle on ne pourra pas réassigner de valeur
const PI = 3.14;
// PI = 13; //action impossible mais pas soulignée par VSC
//! Attention cependant, avec les objets, nous ne pourrons pas remplacer notre objet par autre chose mais ça ne nous empêche pas de modifier l'objet en question
const PERSON = {
    firstname : 'Aude',
    lastname : 'Beurive'
};
//PERSON = 'Ratage'; //action impossible, je ne peux pas remplacer toute ma personne par autre chose
PERSON.firstname = 'Thomas'; //action possible, je peux cependant modifier les valeurs appartenant à cet objet 

//!--------------------------------------------------
//! Conventions de nommage
//!--------------------------------------------------
// Commun à let et const
// * Pas de caractères spéciaux, pas d'espaces, ni d'accents sauf _ et le $ (sauf qu'ils ont une signification donc on les utilise quand même pas comme on veut)
// * Les chiffres sont autorisés MAIS pas en premier caractère
let user1 = 'Aude';
let user2 = 'Aurélien';
// * On utilise des noms clairs, concis et qui explicitent ce que contient la variable (on évite les lettres uniques (a, b ,c , etc) sauf cas particulier, on évite les test, truc, bidule, pipi, caca)
let truc = '';
let test = '';
let a = '';

// * On évite cependant les noms à rallonge
let prixDeMonProduitQuiPourraitEtreEnPromoMaisPeutEtrePasOnSaitPas;
// * On essaie d'écrire ses noms de variables et fonction au maximum en anglais

// propre à let
// On écrit en lowerCamelCase 
// ex :
let prixDuProduit = 12;


// propre à const
// on écriter en UPPERCASE
// ex :
const MA_PHOBIE = 'kiwis';

//!--------------------------------------------------
//! Les types de variables
//!--------------------------------------------------
//? Les types de base
//number 
let nombreEntier = 12;
let nombreDecimal = 12.6;
let grosNombre = 56_978_457; //Vous pouvez rajouter des _ dans les nombres afin de mieux les lire, ça n'altère pas le nombre, c'est juste visuel pour vous

//(pour des domaines d'application mathématiques, nous avons parfois besoin de très gros nombres entiers, il existe donc un type pour ça mais vous aurez très peu de chances de le manipuler en web)
let tresGrosNombre = 1258846464646414854184941941919141845151n;

//string
let maChaine = "Une chaîne qui s'appelle \"Paul\" !";
let maChaine2 = 'Une chaîne d\'argent !';
//* En JS, les deux symboles " et ' sont autorisés. Les conventions de nommage conseillent qu'on utilise ' mais libre à vous tant que vous utilisez tout le temps le même
//* \ caractère d'échappement si une chaine contient " ou '
//* Rappel : il existe aussi l'interpolation de chaine
let nb1 = 15;
let nb2 = 3;
console.log(`Le résultat de ${nb1} + ${nb2} = ${ nb1 + nb2 }`);

//booléen
// * Valeur pour déterminer si on est dans un état ou un autre
let etreWeekEnd = false;
let etreMotivee = true;

//? Les valeurs prédéfinies
//undefined → C'est une valeur spéciale qui signifie qu'il n'y a pas valeur dans la variable (elle est vide) (soit nous même l'avons oubliée soit certaines fonctions nous renvoient volontairement undefined pour signifier qu'elles n'ont rien trouvé par ex)
let uneVariableVide;
//console.log(uneVariableVide.toUpperCase());

//null → Signifie une absence de valeur mais volontaire
// Par exemple pour une valeur qu'on ne connait pas encore mais qu'on connaitra plus tard
let resultatAnnuelJeanMichel = null; //pour préciser qu'il y aura une note mais qu'elle n'est pas encore connue
let chienAude = 'Taylor';
let chienGavin = 'Skye';
let chienAurelien = null; //pour préciser qu'Aurélien n'a pas de chien

//NaN → Signifie que la valeur n'est pas un nombre
// ! Attention cependant cette valeur est de type Number
let test2 = NaN; //test2 aura le type number
//* Nous allons le retrouver : 
//* Quand on fait des opérations qui ne fonctionnent pas
console.log('patates' * 12); //NaN 
//* Quand on fait une conversion ratée
console.log( parseInt('patates') ); //NaN
// ! Dès que vous allez comparer quelque chose qui est NaN avec la valeur NaN ce sera toujours faux
console.log( 'patates' == NaN ); //faux
console.log( parseInt('patates') == NaN ); //faux
console.log( NaN == NaN ); //faux
// ! Il faudra utiliser une fonction existante en js qui s'appelle isNaN(valeurATester)
console.log(isNaN('patates'));

//Infinity
//* Surtout utilisé en maths, vous allez très peu le manipuler, il sert à représenter l'infini mathématiques
console.log( 56 / 0 );

//? Les types avancés (qu'on verra en détail plus tard)
// tableaux 
// * les tableaux sont des variables dans lesquelles il ya des cases qui vont de 0 jusqu'au nombre d'éléments-1
// * ils servent énormément puisqu'ils permettent de stockers un nombre infini de valeurs autour du même thème
let monTableau = ['Lundi', 'Mardi', 'Mercredi'];
// en js, on peut mettre n'importe quoi dans un tableau mais évitez stp pitié
let monBrol = [12, 'lundi', new Date(), { }];
// pour accéder à un endroit en particulier du tableau 
console.log(monTableau[2]); //Mercredi

// objets
let monObjet = {
    'ma propriete 1' : 'valeur 1',
    maPropriete2 : 'valeur 2' //écrivez comme ça pas le premier
};
console.log(monObjet.maPropriete2);
console.log(monObjet['ma propriete 1']);

let person1 = {
    firstname : 'Aude',
    lastname : 'Beurive',
    birthdate : new Date('1989-10-16'),
    vacations : false,
    dogName : 'Taylor',
    catName : null, //mais ce sera bientôt Soup
    direBonjour : () => { console.log('Bonjour je suis ' + person1.firstname) }
    //...
}

console.log(`Nous vous présentons ${person1.firstname} ${person1.lastname} née le ${person1.birthdate}`)
person1.direBonjour();

console.clear();
console.log(monTableau)
console.log(person1);

// Spoiler de ce qui nous attend demain
const BTN = document.getElementById('btn');
console.log(BTN);
// BTN est un objet qu'on va manipuler
BTN.textContent = 'C\'est l\'heure';
BTN.addEventListener('click', () => {
    BTN.style.backgroundColor = 'chartreuse';
});





