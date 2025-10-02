//! Part 1 - Créer la liste

let tableauPrenom = [];


// 1) Récuper element HTML 
const INPUT_NAME = document.getElementById('inputName');
const BTN_ADD = document.getElementById('btnAdd');
const DIV_AFF_1 = document.getElementById('Afficher1');
const BTN_TIRAGE = document.getElementById('btnTirage');
const DIV_AFF_2 = document.getElementById('Afficher2');

// 2) Declarer variable
let NEW_NAME 

//  3) Récupérer valeur de l'input si elle n'est pas vide à l'aide d'une fonction 
BTN_ADD.addEventListener('click', () => {
   addName(); 
})

INPUT_NAME.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addName();
    }
})

function addName(){
    const name = INPUT_NAME.value;
    INPUT_NAME.value = '';

    // Ajouter si input plus grand que 1
 if(name.length>0) {
   tableauPrenom.push(name); 
   //Mettre à jour l'affichage avec join()
    DIV_AFF_1.textContent = tableauPrenom.join(' | ');
}
}

// JSDoc → Permet de rajouter des informations à votre fonction. C'est plus agréable pour vous et pour les autres développeurs
/** 
 * add input to the array
 * 
 /**/

 //! Part 2 - Random tirage au sort

 BTN_TIRAGE.addEventListener('click', () => {
   tirage(); 
})

// qd on clique sur btn tirage, on génére un nombre aléatoire entre 0 et le nombre d'élement dans le tableau au moment où on clique (indice = length)
// On affiche ensuite le prénom sélectionné dans la page


function tirage(){
let chosenNumber = Math.floor(Math.random() * tableauPrenom.length);
//Math.floor = La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

// console.log(tableauPrenom[chosenNumber]);
DIV_AFF_2.textContent = `${tableauPrenom[chosenNumber]} c'est à toi de faire le ménage !`;

// Bonus : quand le prénom est sélectionné, il ne peut plus être tiré au sort
// il doit être supprimé du tableau et de l'affichage

tableauPrenom.splice(chosenNumber,1)
DIV_AFF_1.textContent = tableauPrenom.join(' | ');

}


