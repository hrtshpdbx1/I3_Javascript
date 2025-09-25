//!---------------------------------
//! LES STRUCTURES CONDITIONNELLES
//!---------------------------------

//? Le if (SI)
// s'écrit souvent if...else (SI...SINON...)

//? 1) Le if else simple
const INPUT_NB1 = document.getElementById('nb1');
const BTN_VALIDER1 = document.getElementById('valider1');
const P_RESULTAT1 = document.getElementById('resultat1');

BTN_VALIDER1.addEventListener('click', () => {
    let nombreATester = INPUT_NB1.valueAsNumber;

    // Si le nombre est pair
        //Afficher qu'il l'est dans le P
    // Sinon
        //Afficher qu'il ne l'est pas dans le P

    // En Pseudo-code ça donnerait :
    // SI nombreATester MOD 2 VAUT 0
        // ECRIRE("Pair")
    // SINON 
        // ECRIRE("Impair")

    // Pour savoir si un nombre est pair, il faut qu'il soit entièrement divisible par 2, donc que le modulo du nombre par 2 vale 0
    if( nombreATester % 2 === 0){

        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est pair`;

    } else {

        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est impair`;
    }
});

//? 2) Le if else if else (SI SINON SI SINON)
const INPUT_NB2 = document.getElementById('nb2');
const BTN_VALIDER2 = document.getElementById('valider2');
const P_RESULTAT2 = document.getElementById('resultat2');

BTN_VALIDER2.addEventListener('click', () => {

    let nombreATester = INPUT_NB2.valueAsNumber;

    //Si mon nombre n'est pas vraiment un nombre
    if( isNaN(nombreATester) ){

        P_RESULTAT2.textContent = "Veuillez entrer un nombre ! 😡";

    } else if( nombreATester % 2 === 0 ) {

        P_RESULTAT2.textContent = `Le nombre ${nombreATester} est pair`;

    } else {

        P_RESULTAT2.textContent = `Le nombre ${nombreATester} est impair`;
    }
})

//? 3) Le if à ne pas faire
const P_RESULTAT3 = document.getElementById('resultat3');

// Créer une variable avec la date du jour
const DATE_DU_JOUR = new Date();
// Je récupère le jour de la semaine de la date du jour
const JOUR_SEMAINE = DATE_DU_JOUR.getDay();
// La valeur qu'on a récupéré est un nombre entre 0 et 6
// 0 correspondant au dimanche et 6 au samedi

// si dimanche
if(JOUR_SEMAINE === 0){

    P_RESULTAT3.textContent = "C'est dimanche, c'est le weekend !";

} else if(JOUR_SEMAINE === 1) {

    P_RESULTAT3.textContent = "C'est lundi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 2 ) {

    P_RESULTAT3.textContent = "C'est mardi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 3) {

    P_RESULTAT3.textContent = "C'est mercredi, c'est le milieu de la semaine (mais le morceau de la semaine qui est chiant)";

} else if(JOUR_SEMAINE === 4) {
    
    P_RESULTAT3.textContent = "C'est jeudi, c'est bientôt le weekend";

} else if(JOUR_SEMAINE === 5) {
    
    P_RESULTAT3.textContent = "C'est vendredi, c'est ce soir le weekend";

} else {

    P_RESULTAT3.textContent = "C'est samedi, c'est le weekend !";

}
 
// On évite les if else if else if else if à l'infini. En général, on tolère 2 else if
// if else if else if else -> encore ok, au dessus, on fera plutôt...

// ? Le switch 
// selon que ... vaut ... ou vaut ... sinon ...
const P_RESULTAT4 = document.getElementById('resultat4');

//Attention, le switch compare la variable renseignée à la valeur avec une égalité stricte
// JOUR_SEMAINE est repris de la demo d'au dessus et contient le jour de la semaine de la date du jour
switch(JOUR_SEMAINE){
    case 0 :
        P_RESULTAT4.textContent = "Dimanche";
        break; //permet de sortir du switch
    case 1 :
        P_RESULTAT4.textContent = "Lundi";
        break;
    case 2 :
        P_RESULTAT4.textContent = "Mardi";
        break;
    case 3 :
        P_RESULTAT4.textContent = "Mercredi";
        break;
    case 4 :
        P_RESULTAT4.textContent = "Jeudi";
        break;
    case 5 :
        P_RESULTAT4.textContent = "Vendredi";
        break;
    case 6 :
        P_RESULTAT4.textContent = "Samedi"
        break;
    default : 
        //aucune des valeurs du case
        P_RESULTAT4.textContent = 'Oups une erreur !';
}

// Attention, dans le switch, on ne peut pas mettre de comparaison telle que :
let note = 14;
switch(note) {
    case note < 10 : 
        //ne fonctionnera pas, le switch va regarder
        // if(note === (note < 10)) -> (14 === false)
}

// * ( en fait si on peut en trichant mais on le fait rarement parce que beaucoup de dev trouvent ça berk et c'est un des rares où on peut )
// * on peut tricher en mettant true dans le switch puisqu'on veut rentrer dans le case qui vaut true
switch(true) {
    // if note < 10 === true
    case note < 10 :
        console.log("note inférieure à 10 : bof");
        break;
    // if note === 10 === true
    case note === 10 :
        console.log("moyenne tout pile");
        break;
    // if note > 10 === true
    case note > 10 : 
        console.log("note supérieure à la moyenne : cool");
        break;
    default :
        console.log("erreur");  
}

// ? La ternaire
const P_RESULTAT5 = document.getElementById('resultat5');

// La ternaire est une chouette invention qu'on était tous contents d'avoir
let quantitePatates = 0;

// Sans la ternaire
// if(quantitePatates > 1){

//     P_RESULTAT5.textContent = `Il reste ${quantitePatates} patates`;

// } else {

//     P_RESULTAT5.textContent = `Il reste ${quantitePatates} patate`;

// }

// Avec la ternaire
// (condition) ? traitement si oui : traitement si non
P_RESULTAT5.textContent = `Il reste ${quantitePatates} patate${ (quantitePatates > 1) ? 's' : ''}`;

// autre exemple
let nombre = 42;
P_RESULTAT5.textContent = `Le nombre ${nombre} est ${ (nombre % 2 === 0)? 'pair' : 'impair' }`;

// * Comme toute fabuleuse invention, la ternaire peut vite être mal utilisée
// (condition1) ? traitement condition1 si ok : (condition2) ? traitement si condition2 ok : traitement si ni condition1 ni condition2
// ! On évite de faire des ternaires dans des ternaires dans des ternaires (les autres vous remercieront mais le vous du futur aussi ;))

P_RESULTAT5.textContent = `Aujourd'hui nous sommes ${ (JOUR_SEMAINE === 0) ? 'dimanche' : (JOUR_SEMAINE === 1) ? 'lundi' : (JOUR_SEMAINE === 2) ? 'mardi' : 'le reste de la semaine' }`

// ? Le coalesce -> Du conditionnel spécifique pour les valeurs null
// 1ère utilisation : afficher autre chose si valeur null
const P_RESULTAT6 = document.getElementById('resultat6');

let trainer1 = {
    firstname : 'Aude',
    email : null,
    tel : '0475 55 55 55'
}

let trainer2 = {
    firstname : 'Gavin',
    email : 'gavin@test.be',
    tel : null
}

// valeurAAfficherSiNonNull ?? valeurAAfficherSiNull
// Le coalesce permet d'affiche le contenu d'une variable si elle n'est pas null sinon, prendra la pertie à droite des ??

P_RESULTAT6.textContent = `Le•a formateur•ice ${trainer2.firstname} a pour mail ${trainer2.email ?? '[Non renseigné]'} et pour tel ${trainer2.tel ?? '[Non renseigné]'}`;

// Autre cas d'utilisation
// Si vous enchainez plusieurs variables potentiellement nulles, la première non null sera prise en compte
P_RESULTAT6.textContent = `Votre personne de contact est : ${ trainer1.email ?? trainer2.email ?? 'Ah bah bon courage y\'en a pas' }`;


//Exemple d'un if avec des opérateurs logiques
const INPUT_NB7 = document.getElementById('nb7');
const BTN_VALIDER7 = document.getElementById('valider7');
const P_RESULTAT7 = document.getElementById('resultat7');

BTN_VALIDER7.addEventListener('click', () => {
        let note = INPUT_NB7.valueAsNumber;

        //Si la note rentrée n'est ni un nombre, est < 0, est > 20 -> note invalide
        if( isNaN(note) || note < 0 || note > 20 ) {

            P_RESULTAT7.textContent = 'Vous n\'avez pas entré une note valide';
        }
        //Sinon, la note est valide
        else {

            if(note === 0){
                P_RESULTAT7.textContent = 'Ca pique un peu 😔';
            }
            // si la note est plus grande que 0 ET plus petite ou égal à 5
            else if(note > 0 && note <= 5) {
                P_RESULTAT7.textContent = 'Toujours pas fou mais y\'a du progés 😟';
            }
            else if(note > 5 && note < 10) {
                P_RESULTAT7.textContent = 'On se rapproche de la moyenne 🙂';
            }
            else if(note === 10) {
                P_RESULTAT7.textContent = 'C\'est la moyenne ! 👍🏻';
            }
            else if(note > 10 && note <= 15) {
                P_RESULTAT7.textContent = 'Pas maaaaal 😉';
            }
            else {
                P_RESULTAT7.textContent = 'Excellent !! 😃';
            }
        }
});
