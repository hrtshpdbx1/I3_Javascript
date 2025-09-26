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
    //** mettre la condition excluante en 1er */
    if (isNaN(userAge) || userAge <0 || userAge >130) {

        P_MESSAGE.textContent = `Pfff, t'es vraiment une brèle. Ce site est trop bien pour toi de toute façons`

        // test 2: Si l'input est supérieur à 18
    } else if (userAge < 18) {
        P_MESSAGE.textContent = `⛔ Hop hop, que fais tu ici petit chenapan 🔞`
    }

    // Sinon
    else { P_MESSAGE.textContent = `Bienvenu·e sur notre site pour adultes consentants, wink wink 🍾🍆` }

    INPUT_AGE.value ='';
})



//** aussi possible de mettre : 
//**  } else if (userAge >= 18) {
//**          P_MESSAGE.textContent <= `Bienvenu·e sur notre site pour adultes consentants, wink wink 🍾🍆` }
//**   else { P_MESSAGE.textContent = `⛔ Hop hop, que fais tu ici petit chenapan 🔞` } */



//! Faire en sorte que Enter = valider
INPUT_AGE.addEventListener('keydown', (event)=> {

    if(event.key === 'Enter'){
       //** Triche : on apelle la fonction mais on ne sait pas encore faire :(
       // ** ) */ 
       BTN_VALIDER1.click();
    }
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
    } else if (userYear % 400 === 0 ) {

        P_MESSAGE2.textContent = `L'année ${userYear} est bissextile`;

        // test 3 : l'input est-il divisible par 4 mais pas par cent ? 
    } else if (userYear % 4 === 0 && userYear % 100 !== 0) {

        P_MESSAGE2.textContent = `L'année ${userYear} est bissextile`;

        // Sinon, n'est pas bissextile 
    } else {

        P_MESSAGE2.textContent = `L'année ${userYear} n'est pas bissextile`;
    }

})

INPUT_ANNEE.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        BTN_VALIDER2.click();
    }
})


//?  --------------------------------
//?  Exercice 3 : Distributeur de boisson - 
//?  If avec des opérateurs logiques
//?  --------------------------------

// Distributeur de boissons
// Plusieurs boissons sont affichées dans la page avec un code pour les commander. L'utilisateur rentre un code dans l'input et la bonne boisson est servie. S'il rentre un code qui n'existe pas, lui afficher un message d'erreur.

// Code 542 = Café
// Code 421 = Thé
// Code 623 = Noisette 


const INPUT_CHOICE = document.getElementById('userChoice');
const BTN_VALIDER3 = document.getElementById('valider3');
const P_RESULTAT3 = document.getElementById('resulat3');

const IMG_CAFE = document.getElementById('img_coffee');
const IMG_THE = document.getElementById('img_the');
const IMG_NOISETTE = document.getElementById('img_noisette');
const IMG_RESULTAT = document.getElementById('resultatImg')



BTN_VALIDER3.addEventListener('click', () => {
        let userChoice = INPUT_CHOICE.valueAsNumber;

        //Si l'input rentré n'est pas un nombre
        if( isNaN(userChoice)) {

            P_RESULTAT3.textContent = 'Vous n\'avez pas entré un code valide';
        }
        //Sinon
        else {

            if(userChoice === 542){
                 IMG_RESULTAT.src = "img/coffee.png";
                 P_RESULTAT3.textContent = 'Voici votre café';
            }
            // si la note est plus grande que 0 ET plus petite ou égal à 5
            else if(userChoice === 421) {
               IMG_RESULTAT.src = "img/tea.png";
                P_RESULTAT3.textContent = 'Voici votre thé';
            }
            else if(userChoice === 623) {
                IMG_RESULTAT.src = "img/noisette.png";
                P_RESULTAT3.textContent = 'Voici votre café noisette';
            }
            
        }
});

INPUT_CHOICE.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        BTN_VALIDER3.click();
    }
})
//?  --------------------------------
//?  Exercice 4:Distributeur de boisson - Le switch 
//?  selon que ... vaut ... ou vaut ... sinon ...
//? --------------------------------


const INPUT_CHOICE4 = document.getElementById('userChoice4');
const BTN_VALIDER4 = document.getElementById('valider4');
const P_RESULTAT4 = document.getElementById('resulat4');

const IMG_CAFE4 = document.getElementById('img_coffee4');
const IMG_THE4 = document.getElementById('img_the4');
const IMG_NOISETTE4 = document.getElementById('img_noisette4');
const IMG_RESULTAT4 = document.getElementById('resultatImg4')


BTN_VALIDER4.addEventListener('click', () => {

switch(INPUT_CHOICE4.valueAsNumber) {
   case 542 :
        IMG_RESULTAT4.src = "img/coffee.png";
        P_RESULTAT4.textContent = 'Voici votre café';
        break;
    case 421 :
        IMG_RESULTAT4.src = "img/tea.png";
        P_RESULTAT4.textContent = 'Voici votre thé';
        break;
    case 623 :
        IMG_RESULTAT4.src = "img/noisette.png";
        P_RESULTAT4.textContent = 'Voici votre café noisette';
        break;
    default : 
        //aucune des valeurs du case
        P_RESULTAT4.textContent = 'Oups une erreur !';
}


})

INPUT_CHOICE4.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        BTN_VALIDER4.click();
    }
})