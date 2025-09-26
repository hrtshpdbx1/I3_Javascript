//* Easy: entre 1 et 10 et 10 tentative
//* Moyen : entre 1 et 10 et 10 tentative
//* Hardcore : entre 1 et 1000 et 15 tentative



const BTN_EASY = document.getElementById('btn_easy')
const BTN_MILD = document.getElementById('btn_mild')
const BTN_HARDCORE = document.getElementById('btn_hardcore')

const BTN_GO = document.getElementById('btn_go') 
//* vérifier si le nombre est valide (pas Nan, >=1,<=10 )

// ! Comment faire un nombre aléatoire en javaScript ?

console.log( Math.random() ); 
//Math.random vous fait un nombre entre 0.00000000000... et 0.99999999...

// Du coup, si on veut un nombre entre 1 et 10
console.log( Math.random() * 10   );
// Va faire un nombre entre 0.000000... et 9.999999...
console.log( Math.random() * 10 + 1);
// Va faire un nombre entre 1.000000... et 10.999999...
console.log( Math.floor(Math.random() * 10 + 1) );
// Va faire un nombre entre 1 et 10

const nombreATrouver = Math.floor(Math.random() * 10 + 1);

// ! Si vous souhaitez faire les émojis pour les tentatives
let tentatives = 5;
// padEnd rajoute le caractère donné en deuxième paramètre à la fin de la chaine sur laquelle on utilisé padEnd autant de fois que nécessaire pour atteindre la taille précisée en premier paramètre
console.log( "--".padEnd(tentatives, '*')  );
console.log( "".padEnd(tentatives, '💲')  ); /* Un émoji prend la place de 2 caractères */
console.log( "".padEnd(tentatives * 2 , '💲')  );

console.log( "--".padStart(tentatives, '*') );
console.log( "------".padStart(tentatives, '*'));


 