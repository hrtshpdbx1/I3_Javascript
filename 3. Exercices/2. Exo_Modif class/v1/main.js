// Etape 1) Récupérer élément HTML, Ajouter Evènement, Récupérer valeur input, Modifier Texte 

// Dans la partie HTML, créer un input pour récupérer chacune de ces valeurs (prénom, nom, age) 

// Créer un bouton pour rajouter l'évènement qu'au click, une phrase s'affiche dans un paragraphe 'Bonjour, je m'appelle Aude Beurive et je vais avoir 36 ans' 




//récuper donnée

const DIV_PRENOM = document.getElementById('prenom');
const DIV_NOM = document.getElementById('nom');
const DIV_AGEM= document.getElementById('age');
const DIV_URL = document.getElementById('url');

console.log(DIV_PRENOM); //contient null puisqu'on a fait une faute dans le nom de l'id

//tradution donnée texte age en chiffre
// ajouter 1

// Formulation d'une interpolation
// let confirmation = confirm(`Vous vous appelez bien ${prenom} ?`);
//* `Bonjour, je m'appelle ${prenom} ${nom} et je vais avoir ${agePlus} ans´
