//?  --------------------------------
//?  Exercice 1 : Accès au site
//?  --------------------------------
// Demandez l'âge de l'utilisateur, si la personne est majeure, elle peut aller sur le site sinon, on lui affiche le message contraire.


const INPUT_AGE = document.getElementById('age');
const BTN_VALIDER1 = document.getElementById('valider1');
const P_MESSAGE = document.getElementById('message1')



BTN_VALIDER1.addEventListener('click', () => {
    let userAge = INPUT_AGE.valueAsNumber;

    // test 1: Si l'input n'est pas un nombre
    if (isNaN(userAge)) {

        P_MESSAGE.textContent = `Pfff, t'es vraiment une brèle. Ce site est trop bien pour toi de toute façons`

        // test 2: Si l'input est supérieur à 18
    } else if (userAge < 18) {
        P_MESSAGE.textContent = `⛔ Hop hop, que fais tu ici petit chenapan 🔞`
    }

    // Sinon
    else { P_MESSAGE.textContent = `Bienvenu·e sur notre site pour adultes consentants, wink wink 🍾🍆` }
})


//?  --------------------------------
// ? Exercice 2 : Année Bissextile
//?  --------------------------------

//* Une année est bissextile si divisible par 4 mais pas par 100, ou si elle est divisible par 400 
//* Si divisible, Modulo de 0. 

const INPUT_ANNEE = document.getElementById('year');
const BTN_VALIDER2 = document.getElementById('valider2');
const P_MESSAGE2 = document.getElementById('message2')


BTN_VALIDER2.addEventListener('click', () => {
    let userYear = INPUT_ANNEE.valueAsNumber;

    // test 1: Si l'input n'est pas un nombre
    if (isNaN(userYear)) {

        P_MESSAGE2.textContent = `Non mais t'es un cas désespéré`

        // test 2 : l'input est-il divisible par 400 ?
    } else if (userYear % 400 === 0) {

        P_MESSAGE2.textContent = `L'année ${userYear} est bissextile`;

        // test 3 : l'input est-il divisible par 4 mais pas par cent ? 
    } else if (userYear % 4 === 0 && userYear % 100 !== 0) {

        P_MESSAGE2.textContent = `L'année ${userYear} est bissextile`;

        // Sinon, n'est pas bissextile 
    } else {

        P_MESSAGE2.textContent = `L'année ${userYear} n'est pas bissextile`;
    }

})


//?  --------------------------------
//?  Exercice 3 :Distributeur de boisson
//?  --------------------------------

// Distributeur de boissons
// Plusieurs boissons sont affichées dans la page avec un code pour les commander. L'utilisateur rentre un code dans l'input et la bonne boisson est servie. S'il rentre un code qui n'existe pas, lui afficher un message d'erreur.

// Code 542 = Café
// Code 421 = Thé
// Code 623 = Noisette 


const INPUT_CHOICE = document.getElementById('userChoice');
const BTN_VALIDER3 = document.getElementById ('valider3');
const P_RESULTAT = document.getElementById('resulat3');

const IMG_CAFE = document.getElementById('img_coffee');
const IMG_THE = document.getElementById('img_the');
const IMG_NOISETTE = document.getElementById('img_noisette');
const IMG_RESULTAT = document.getElementById('resultatImg')
