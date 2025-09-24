// Grâce à trois input, récupérer : 
// 1. Le prix total de la note du restau
// 2. Le pourcentage du pourboire
// Le nombre de personnes qui ont mangé

// Quand on clique sur Calculer : 
// Afficher le montant du pourboire par rapport à la note en fonction du % indiqué
// Afficher le montant à payer par personne (note + pourboire) / nombre de personne
// Afficher le montant total à payer (noter + pourboire)
// Quand on clique sur Réinitialiser, remet tout à 0

// Bonus : Arrondir les résultats toujours à 2 chiffres après la virgule (comme dans l'image)

//! 1) Identifier et récuper les éléments dont on a besoin pour l'exercice
//  ? cesont des élements HTML, on y touche plus

const INPUT_AMOUNT_PAID = document.getElementById('amountpaid');
const INPUT_TIPS = document.getElementById('tips');
const INPUT_GUESTS = document.getElementById('nb_guests');

const BTN_CALCULER = document.getElementById('calculer');
const BTN_RESET = document.getElementById('reset');

const DIV_TIPS_PERCENT = document.getElementById('tipsPercent');
const DIV_AMOUNT_PER_PERSON = document.getElementById('amountPerPerson');
const DIV_TOTAL = document.getElementById('totalAmount');

//! 2) Rajouter l'évenement sur le bouton 

BTN_CALCULER.addEventListener('click', () => {

//! 3 ) Faire nos calculs et mettre dans la page
// ? Récupérer ce qu'il y a ds les inputs 
// * let note = INPUT_AMOUNT_PAID.valueAsNumber
// * let pourcentPourboires = DIV_TIPS_PERCENT.valueAsNumber
// * let nbPersonne = INPUT_GUESTS.valueAsNumber 

// ? Faire les calculs en découpant au max
//?* let pourboire = (pourboire = (note * pourcentPourboire)/100;
//?* let total = note + pourboire;
//?* let totalParPersonne = total / nbPersonnes; 

// --> console.log a chaque fois, vérifier au fur et a mesure


// ? Afficher dans la page
//*  DIV_TIPS_PERCENT = pourboire.toFixed(2) + ` €`;  
//*  DIV_AMOUNT_PER_PERSON = total.toFixed(2) + ` €`; 
//*  DIV_TOTAL = totalParPersonne.toFixed(2) + ` €`; 

// -------------------------------------------- 



    //* Montant du pourboire :
    // pourboire = note * (pourcentage / 100)
    let tipsPercent = (INPUT_AMOUNT_PAID.valueAsNumber * (INPUT_TIPS.valueAsNumber / 100));
    // DIV_TIPS_PERCENT.textContent = `${tipsPercent}%`;
    DIV_TIPS_PERCENT.textContent = tipsPercent.toFixed(2) + ` €`; 

    //* Montant total à payer :
    // total = note + pourboire

    let totalAmount = INPUT_AMOUNT_PAID.valueAsNumber + tipsPercent;
    DIV_TOTAL.textContent = totalAmount.toFixed(2) + ` €`;

    //* Montant à payer par personne :
    // parPersonne = total / nombreDePersonnes

    let perPerson = totalAmount / INPUT_GUESTS.valueAsNumber;
    DIV_AMOUNT_PER_PERSON.textContent = perPerson.toFixed(2) + ` €/personne`;


});

//* Reset 
BTN_RESET.addEventListener('click', () => {
    INPUT_AMOUNT_PAID.value = '0 €';
    INPUT_TIPS.value = '0 %';
    INPUT_GUESTS.value = '👯?';

    //* Pour les paragrahes modifier le contenu textuel (c'est un élément HTML il ne possède pas de valeur,)
    DIV_TIPS_PERCENT.innerText = '';
    DIV_AMOUNT_PER_PERSON.innerText = '';
    DIV_TOTAL.innerText = '';

    //* ou, version
    //* document.getElementById('form').reset();

    //* ou encore
    //* document.forms.splitForm.reset();
    // --> mais il faut avoir donné un nom au formulaire 
});






// Arrondir tous les résultats à deux chiffres après la virgule :
// valeur.toFixed(2) (à appliquer sur chaque résultat)


// let x = 2.960024578;
// let res = x.toFixed(2);
// console.log(res);

