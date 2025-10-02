// ! Déclaration des booléens
let etreJourFiestaI3 = false;
let faireGris = true;

// ! Les valeurs truthy et falsy en JS
// ? Les falsy
// let test; //undefined; //falsy
// let test = undefined; //toujours falsy
// let test = null; //falsy
// let test = ''; //chaine vide //falsy
// let test = 0; //falsy
// let test = NaN; //falsy
// let test = false; //falsy évidemment

// ? les truthy
// let test = 'pouet'; //truthy
// let test = -5; //truthy
// let test = 5; //truthy
// let test = true; //truthy
// let test = []; //tableau vide //truthy
// let test = {}; //objet vide //truthy
let test = new Date(); //objet date //truthy

// Si test vaut true
if(test) {
    console.log(test + ' est truthy');
    
}

// Si test vaut false
if(!test){
    console.log(test + ' est falsy');
    
}

// ! Comparaisons
// > et >=
console.log("5 > 2 = " + (5 > 2));
console.log("2 > 5 = " + (2 > 5));
console.log("5 > 5 = " + (5 > 5));
console.log("5 >= 5 = " + (5 >= 5));

// < et <=
console.log("5 < 2 = " + (5 < 2));

// == et !=
console.clear();
console.log("5 == 5 = " + (5 == 5));
console.log("5 == 2 = " + (5 == 2));
console.log("5 != 5 = " + (5 != 5));
console.log("5 != 2 = " + (5 != 2));

// On oublie pas qu'on est en JS et que le Js c'est magique (ou horrible au choix) 😡
console.log(" 5 == '5' = " + (5 == '5'));
console.log(" 1 == true = " + (1 == true));

console.log("null >= 0 = " + (null >= 0));
console.log("null <= 0 = " + (null <= 0));
console.log("null == 0 = " + (null == 0));

// ! Attention le == et le != font une conversion implicite. Par sécurité on utilise toujours l'égalité stricte
// === et !==
console.clear();
console.log("5 === '5' = " + (5 === '5'));
console.log("1 === true = " + (1 === true));

// ! Opérateurs logiques
// * ! -> Négation (L'inverse)
console.clear();
console.log(!true);
console.log(!(5 > 2));
console.log(!false);

// OU || -> Au moins UNE des conditions doit être vraie pour que la totalité de la condition soit vraie
let etreMalade = true;
let etreEnVacances = false;

let etreEnRepos = etreMalade || etreEnVacances;
console.log("On est en repos ? : " + etreEnRepos);

// ET && -> Toutes les conditions doivent être vraies pour que la totalité de la condition soit vraie
let etreDimanche = true;
let faireBeau = true;

let allerALaPlage = etreDimanche && faireBeau;
console.log("Va-t-on à la place ? " + allerALaPlage)

// ! On se fait un récap de tout ça Jeudi et surtout, on les réutilisera dans des structures conditionnelles

// spoiler de la semaine pro
if(allerALaPlage) {
    console.log("Je prends mon maillot");
}
else {
    console.log("Je pleure");
}


















