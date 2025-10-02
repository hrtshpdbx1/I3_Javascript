//* Easy: entre 1 et 10 et 3 tentative
//* Moyen : entre 1 et 10 et 10 tentative
//* Hardcore : entre 1 et 1000 et 15 tentative


const BTN_EASY = document.getElementById('btn_easy');
const BTN_MILD = document.getElementById('btn_mild');
const BTN_HARDCORE = document.getElementById('btn_hardcore');


const INPUT_USER = document.getElementById('input_user');
const BTN_GO = document.getElementById('btn_go');
const P_CONSIGNE = document.getElementById('p_consigne')
const P_RESULTAT = document.getElementById('p_resultat')
const P_TENTATIVE = document.getElementById('p_tentative')
const DIV_IMG = document.getElementById('div_img')


// initialiser nombreATrouver sans attribuer de valeur 
let nombreATrouver;
// initialiser nombreTentative sans attribuer de valeur 
let nombreTentative;
let max;

INPUT_USER.disabled = true;
BTN_GO.disabled = true;

BTN_EASY.addEventListener('click', () => {
    DIV_IMG.src = ''
    P_TENTATIVE.textContent = ``

    INPUT_USER.value = 0;
    max = 10;
    nombreATrouver = Math.floor(Math.random() * max + 1);
    nombreTentative = 3;
    P_CONSIGNE.textContent = `Veuillez entre un nombre en 1 et ${max} pour deviner le prix de cette mignonne petite étoile ou sinon elle va mourir.`

    INPUT_USER.disabled = false;
    BTN_GO.disabled = false;

    //desactiver btn level
    BTN_MILD.disabled = true;
    BTN_HARDCORE.disabled = true;

})

BTN_MILD.addEventListener('click', () => {
    DIV_IMG.src = ''
    P_TENTATIVE.textContent = ``

    INPUT_USER.value = 0;
    max = 100;
    nombreATrouver = Math.floor(Math.random() * max + 1);
    nombreTentative = 10;
    P_CONSIGNE.textContent = `Veuillez entre un nombre en 1 et ${max} pour deviner le prix de cette mignonne petite étoile ou sinon elle va mourir.`

    INPUT_USER.disabled = false;
    BTN_GO.disabled = false;

    //desactiver btn level
    BTN_EASY.disabled = true;
    BTN_HARDCORE.disabled = true;

})

BTN_HARDCORE.addEventListener('click', () => {
    DIV_IMG.src = ''
    P_TENTATIVE.textContent = ``

    INPUT_USER.value = 0;
    max = 1000;
    nombreATrouver = Math.floor(Math.random() * max + 1);
    nombreTentative = 15;
    P_CONSIGNE.textContent = `Veuillez entre un nombre en 1 et ${max} pour deviner le prix de cette mignonne petite étoile ou sinon elle va mourir.`

    INPUT_USER.disabled = false;
    BTN_GO.disabled = false;

    //desactiver btn level
    BTN_EASY.disabled = true;
    BTN_MILD.disabled = true;
})

//** ------------- FIN DIFFICULTE---------------------


//** ------------- JEU ---------------------


BTN_GO.addEventListener('click', () => {
    if (nombreTentative > 0) {
        nombreTentative-- // décrémentation : diminue le nb de tentatives de 1
    }
    else if (nombreTentative === 0) {
        P_RESULTAT.textContent = `Game Over ⛔`;
        DIV_IMG.src = 'nay.png'
        BTN_GO.disabled = true;
        BTN_EASY.disabled = false;
        BTN_MILD.disabled = false;
        BTN_HARDCORE.disabled = false;
    }


    const nombreATester = INPUT_USER.valueAsNumber;

    // P_CONSIGNE.textContent = ''; //efface la consigne

    P_TENTATIVE.textContent = `Il vous reste ${nombreTentative} tentative${(nombreTentative > 1) ? 's' : ''}.`  //ternaire : si nombreTentative > 1, aouter un s
    //Si l'input vraiment un nombre
    if (isNaN(nombreATester) || nombreATester < 1 || nombreATester > max) {
        P_RESULTAT.textContent = `Vous n'avez vraiment pas de coeur, je vous ai demandé de rentrer un nombre entre 1 et ${max} !😡`;
        DIV_IMG.src = 'nay.png'

        //     //Si nb_tentative est égal à 0 :  
        // } else if (nombreTentative === 0) {
        //     P_RESULTAT.textContent = `Game Over ⛔`;
        //     DIV_IMG.src = 'nay.png'
        //     BTN_GO.disabled = true;

        //Si nombreATester est plus petit que nombreATrouver et que nb_tentative est plus grand que  0 :  
    } else if (nombreATester < nombreATrouver && nombreTentative != 0) {
        P_RESULTAT.textContent = `Bien essayé mais le nombre à trouver est plus grand que ${nombreATester}...`;
        DIV_IMG.src = 'meh.png'
            ;

        //Si nombreATester est plus grand que nombreATrouver et que nb_tentative est plus grand que  0 :  

    } else if (nombreATester > nombreATrouver && nombreTentative != 0) {
        P_RESULTAT.textContent = `Ehhhh non, le nombre à trouver est plus petit que ${nombreATester} ...`;
        DIV_IMG.src = 'meh.png'
            ;

        //Si tout le reste est faux = c'est gagné 
    } else {
        P_RESULTAT.textContent = `C'est gagné ! Vous êtes incroyable, je le savais depuis le début <3`;
        DIV_IMG.src = 'yay.png'
        P_TENTATIVE.textContent = ``

        INPUT_USER.disabled = true;
        BTN_GO.disabled = true;

        //réactiver level
        BTN_EASY.disabled = false;
        BTN_MILD.disabled = false;
        BTN_HARDCORE.disabled = false;

    }
})


//** ------------- FIN JEU ---------------------


// ? Bonus emoji

function showGuess(){
    P_TENTATIVE.textContent
}


// ! Comment faire un nombre aléatoire en javaScript ?

console.log(Math.random());
//Math.random vous fait un nombre entre 0.00000000000... et 0.99999999...

// Du coup, si on veut un nombre entre 1 et 10

console.log(Math.random() * 10);
// Va faire un nombre entre 0.000000... et 9.999999...

console.log(Math.random() * 10 + 1);
// Va faire un nombre entre 1.000000... et 10.999999...

console.log(Math.floor(Math.random() * 10 + 1));
// Va faire un nombre entre 1 et 10

const nombreATrouver = Math.floor(Math.random() * 10 + 1);

// ! Si vous souhaitez faire les émojis pour les tentatives
let tentatives = 5;
// padEnd rajoute le caractère donné en deuxième paramètre à la fin de la chaine sur laquelle on utilisé padEnd autant de fois que nécessaire pour atteindre la taille précisée en premier paramètre

console.log("--".padEnd(tentatives, '*'));
console.log("".padEnd(tentatives, '💲')); /* Un émoji prend la place de 2 caractères */
console.log("".padEnd(tentatives * 2, '💲'));

console.log("--".padStart(tentatives, '*'));
console.log("------".padStart(tentatives, '*'));


