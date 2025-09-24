// ! Pour débuter, comme il est complexe de directement intéragir avec le HTML et qu'on verra plus tard comment on fait tout ça, nous avons d'autres solutions pour dialoguer avec l'utilisateur. Ces solutions sont surtout uilisées en débogage.
// ? -------------------------------------------------
// ? La console 
// * Très pratique pour afficher des informations pour nous aider pendant le développement (on ne pourra pas y récupérer d'infos tapée à l'intérieur)
// Affiche dans la console
console.log('Bonjour'); //les textes s'affichent toujours en noir dans la console
console.log(42); //les autres types s'affichent eux, en couleur

// \ c'est le caractère d'échappement et permet de signifier que le prochain caractère doit être interprêté comme du texte et pas du code
// console.error() va afficher en rouge en mode erreur dans la console
console.error('Error brain not found : J\'ai faim');

// Pour afficher un warning
console.warn('Attention ça glisse');

// ? -------------------------------------------------
// ? Le popup du navigateur (utile pour débug)
// * Il existe un popup propre au navigateur qu'on peut utiliser pour le débug mais qu'on n'utilise pas pour afficher une information pour l'utilisateur. Cette fenêtre est assez sommaire et de plus, elle est propre au navigateur et ne peut être modifiée
// Ce popup a trois modèles différents
// Pour afficher quelque chose :
alert('Salut');
// Pour demander à l'utilisateur une information :
// * Puisqu'on récupère quelque chose, on devra le stocker dans une variable pour l'utiliser plus tard
let prenom = prompt('Comment vous appelez-vous ?');
// Pour demander une confirmation 
// let confirmation = confirm('Vous vous appelez bien ' + prenom + ' ?'); 
//Spoiler : on verra une façon plus sexy d'écrire ça
//En fait j'vais déjà vous spoiler parce que sinon vous allez pas aimer l'exercice
//* l'interpolation de chaine (utilisé avec le backtick)
let confirmation = confirm(`Vous vous appelez bien ${prenom} ?`);


