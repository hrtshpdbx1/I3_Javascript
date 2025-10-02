// ! Les 3 boutons de difficulté
const BTN_EASY = document.getElementById('easy');
const BTN_MEDIUM = document.getElementById('medium');
const BTN_HARD = document.getElementById('hard');

// ! Les containers de jeu
const DIV_GAME = document.getElementById('game');
const DIV_BEFORE = document.getElementById('before-game');

// ! Le Jeu
const P_GUESS = document.getElementById('guess');
const SPAN_NB_MAX = document.getElementById('nbMax');
const INPUT_NB_USER = document.getElementById('nbUser');
const BTN_GO = document.getElementById('go');
const P_RESULT = document.getElementById('result');

// ! Variables dont j'ai besoin pour le jeu
let nbMax;
let maxGuess;
let guess;
let random;

// ---------- DIFFICULTE -----------
// ! Gestion des boutons de difficulté
BTN_EASY.addEventListener('click', () => {
    initGame('easy');
})

BTN_MEDIUM.addEventListener('click', () => {
    initGame('medium');
})

BTN_HARD.addEventListener('click', () => {
   initGame('hard');
})

// ! Fonction pour initiaiser le jeu en fonction d'une difficulté
// JSDoc → Permet de rajouter des informations à votre fonction. C'est plus agréable pour vous et pour les autres développeurs
/** 
 * initialize the game with a level in parameter (hard, medium or easy)
 * @param {string} level
*/
function initGame(level) {
    DIV_GAME.classList.remove('hidden');
    DIV_BEFORE.classList.add('hidden');

    if(level === 'hard'){
        nbMax = 1000;
        maxGuess = 15;
    } else if(level === 'medium')
    {
        nbMax = 100;
        maxGuess = 10;
    }
    else {
        nbMax = 10;
        maxGuess = 3;
    }

    guess = 0;
    random = Math.floor(Math.random() * nbMax + 1);

    BTN_EASY.disabled = true;
    BTN_MEDIUM.disabled = true;
    BTN_HARD.disabled = true;

    SPAN_NB_MAX.textContent = nbMax;
    // Affichage du nombre de tentatives
    showGuess();

    INPUT_NB_USER.value = '';
    P_RESULT.textContent = '';

    INPUT_NB_USER.disabled = false;
    BTN_GO.disabled = false;
}
// ---------- FIN DIFFICULTE -----------

// ---------- JEU ---------
BTN_GO.addEventListener('click', () => {
    verifyNumber();
})

INPUT_NB_USER.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        verifyNumber();
    }
})

/** 
 * verify if the user number matches the random number
 */
function verifyNumber(){
    const userNumber = INPUT_NB_USER.valueAsNumber;

    INPUT_NB_USER.value = '';

    // Si l'utilisateur tape n'importe quoi, on lui dit
    if(isNaN(userNumber) || userNumber < 1 || userNumber > nbMax ){
        P_RESULT.textContent = 'Tu sais lire ?';
    }
    // Si l'utilisateur propose un chiffre trop haut
    else if(userNumber > random){
        P_RESULT.textContent = 'C\'est moins que ' + userNumber;
        guess++;
    } 
    // Si l'utilisateur propose un chiffre trop petit
    else if(userNumber < random){
        P_RESULT.textContent = 'C\'est plus que ' + userNumber;
        guess++;
    }
    else {
        P_RESULT.textContent = `Gagné ! Le nombre à trouver était bien ${userNumber} 🥳`;
        finishGame();
    }

    // Mise à jour du nomre de tentatives
    showGuess();

    // Si on a atteint le nombre max de guess possible
    if(guess === maxGuess){
        P_RESULT.textContent =`Looooser 💩! C\'est perdu, le nombre était ${random} !`;
        finishGame();
        
    }

}

function finishGame(){
    INPUT_NB_USER.disabled = true;
    BTN_GO.disabled = true;
    BTN_EASY.disabled = false;
    BTN_MEDIUM.disabled = false;
    BTN_HARD.disabled = false;
}

// ---------- FIN JEU ---------

// ? Bonus Emoji
function showGuess() {
    //* 1) Pour afficher les tentatives restantes en nombre
    // P_GUESS.textContent = maxGuess - guess;

    //* 1) Pour afficher les tentatives restantes en *
    // String.padEnd(maxLength, character) → rempli la chaine sur laquelle est utilisée la méthode padEnd jusqu'à obtenir la longueur maxLength en remplissant avec character

    // let guessAvailable = maxGuess - guess;
    // P_GUESS.textContent = "".padEnd( guessAvailable , '*');

    //* 2) On va faire pareil mais avec un emoji
    // let guessAvailable = maxGuess - guess;
    // Vu que le dollar prend 2 caractères, je dois doubler la longueur de ma chaine
    // P_GUESS.textContent = "".padEnd( guessAvailable*2 , '💲');

    // * 3) Et si on rajoutait des explosions pour les guess qui sont perdus ?
    let guessAvailable = maxGuess - guess;
    P_GUESS.textContent = "".padEnd( guessAvailable*2 , '💲');
    P_GUESS.textContent = P_GUESS.textContent.padEnd( maxGuess * 2  ,'💥');

    // Pour tester dans la console combien de caractères prend un emoji
    // console.log("".padEnd(14, '👩🏻‍👩🏼‍👧🏻'))

}



