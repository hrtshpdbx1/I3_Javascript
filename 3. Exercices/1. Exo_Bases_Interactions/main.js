

let prenom = prompt('Quel est ton prénom?');
let nom = prompt('Quel est ton nom ?');
let age = prompt ('Quel est ton age?');

// option 1 : + propre
let ageNombre = parseInt(age); // transformation en entier

// option 2
let ageNombre2 = Number(age); // casting explicite 

// option 3
let ageNombre3 = +age; // rajouter un + devant une chaine de caractere permet de la transformer en nombre // vite illisible en cas de gros calcul

// option 4 
let ageNombre4 = age++  // ++ permet de rajouter 1 a une variable, et donc la transforme la variable en nombre

// alert(`Enchanté ${prenom} ${nom}, vous allez bientôt avoir ${ageNombre+'1'} ans`);
 
alert(`Enchanté ${prenom} ${nom}, vous allez bientôt avoir ${ageNombre+1} ans`);

// let confirmation = confirm(`Enchanté ${prenom} ${nom}, vous allez bientôt avoir ${ageNombre+1} ans`);

//? let sera utilisé pour toute variable à laquelle, on veut plus tard réassigner une nouvelle valeur
let prixArticle;
let somme= 0 ;
somme = somme + 42; 

//? const sera utilisé pour toute variable à laquelle on ne pourra pas réasigner de valeur 
const PI= 3.14;
//PI = 13; //action impossible mais pas soulignée par VSC
//! Attention, mais avec les objets nous ne pourrons pas remplacer notre objet par autre chose mais ça ne nous emêche pas de modifier l'objet en question
const PERSON = {
    firstname :'Aude',
    lastname : 'Beurive'

};

// Person = ratage; // ation impossible, je ne peux pas remplacer toute ma personne par autre chose
PERSON.firstname = 'Claudette'// Action possible, je peux remplacer les valeurs appartement à cet objet

//! ------------------------------------
// ! Convention de nomage
//! ------------------------------------

// Commun à let et const
// pas de caractères spéciaux ni d'accents sauf le _ et $ (mais ont un role donc pas n'importe quand)
// chiffre OK, mais pas en premier caractère

// propre à let
// On écrit en lowerCamelCase
//ex :
let prixDuProduit = 12;

// propre à const
// On écrit en UPPERCASE
//ex :
const MA_PHOBIE ='kiwis';


//! ------------------------------------
// ! Type de variable
//! ------------------------------------

//? Type de base

// Number
Entiers ou décimaux

// String
// Boolean

//? 
// null
