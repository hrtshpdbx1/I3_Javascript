// ! --------------------------------
// //! IF SIMPLE
// ! --------------------------------

const INPUT_NB1 = document.getElementById("nb1");
const BTN_VALIDER1 = document.getElementById("valider1");
const P_RESULTAT1 = document.getElementById("resultat1")


BTN_VALIDER1.addEventListener('click', () => {
    let nombreATester = INPUT_NB1.valueAsNumber;

    //** Pseudo code :
    //** Si NombreATester MOD 2 vaut 0
    //** */ ECRIRE("Pair"
    //** */ SINON
    //** */ ECRIRE ("Impair")) */

    if (nombreATester % 2 === 0) {
        P_RESULTAT1.textContent = `le nombre ${nombreATester} est pair;`

    } else {
        P_RESULTAT1.textContent = `le nombre ${nombreATester} est impair`
    }

})

// ! --------------------------------
//! IF ELSE
// //! Si sinon Si, sinon 
// ! --------------------------------

const INPUT_NB2 = document.getElementById("nb2");
const BTN_VALIDER2 = document.getElementById("valider2");
const P_RESULTAT2 = document.getElementById("resultat2")

BTN_VALIDER2.addEventListener('click', () => {
    let nombreATester = INPUT_NB2.valueAsNumber;

    // test 1: Si mon nombre n'est pas un nombre
    if (isNaN(nombreATester)) {

        P_RESULTAT2.textContent = `Veuillez rentrer un nombre()`

        // test 2: Si mon nombre est divisible par 2

    } else if (nombreATester % 2 === 0) {
        P_RESULTAT2.textContent = `Le ${nombreATester} est pair`
    }

    // Sinon 

    else { P_RESULTAT2.textContent = `Le ${nombreATester} est impair` }


})

// ! --------------------------------
//! IF A NE PAS FAIRE
// ! --------------------------------
// (cf. demo)


// Créer une variable avec la date du jour
const DATE_DU_JOUR = new Date();
// Je récupère le jour de la semaine de la date du jour
const JOUR_SEMAINE = DATE_DU_JOUR.getDay();


// ! --------------------------------
//! SWITCH
// //! Selon que ... vaut ou vaut ... sinon 
// ! --------------------------------

const P_RESULTAT4 = document.getElementById("resultat4")

switch (JOUR_SEMAINE) {
    case 0: P_RESULTAT4.textContent = "Dimanche"; break;
    case 1: P_RESULTAT4.textContent = "Lundi"; break;
    case 2: P_RESULTAT4.textContent = "Mardi"; break;
    case 3: P_RESULTAT4.textContent = "Mercredi"; break;
    case 4: P_RESULTAT4.textContent = "Jeudi"; break;
    case 5: P_RESULTAT4.textContent = "Vendredi"; break;
    case 6: P_RESULTAT4.textContent = "Samedi"; break;
    default: P_RESULTAT4.textContent = "Oups"

}

//? La ternaire
// () ? :
// (la condition) ? traitement si oui : traitement sinon non 
const P_RESULTAT5 = document.getElementById('resultat5')

let quantitePatates = 5;

P_RESULTAT5.textContent = `Il reste ${quantitePatates} patate${(quantitePatates > 1) ? "s" : ""}`


//? Le coalesce - nullish coalescing
// Conditionnel pour les valeurs nulles 
const P_RESULTAT6 = document.getElementById('resultat6')

let trainer1 = {
    firstname: 'Aude',
    email: null,
    tel: '0475 52 26 23'
}

let trainer2 = {
    firstname: 'Gavin',
    email: 'email@truc.com',
    tel: null
}

// valeurAAffichierSiNonNull ?? valeurAAffichierSiNull 
// permet d'afficher le contenu d'une variable si elle n'est pas null sinon, prendra la partie de droite

P_RESULTAT6.textContent = `Le·a formateur·ice ${trainer1.firstname} a pour mail ${trainer1.email ?? '[Non renseigné]'} et pour tel ${trainer1.tel}`;

P_RESULTAT6.textContent = `Le·a formateur·ice ${trainer2.firstname} a pour mail ${trainer2.email ?? '[Non renseigné]'} et pour tel ${trainer2.tel ?? '[Non renseigné]'}`; 


//? If avec opérateur logique

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
