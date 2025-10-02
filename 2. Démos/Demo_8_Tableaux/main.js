// ! Les tableaux
// ! ⚠️ En JS, il n'y a pas de différence entre tableau et liste. Les tableaux en js, n'ont pas de taille fixe, si on rajoute des valeurs dedans, il grandit et si on en enlève, il rétrécit
// ! ⚠️ En JS, on peut mettre n'importe quoi dans un tableau. Ca peut causer beaucoup de soucis par la suite donc faites des tableaux avec le même type de données à l'intérieur
console.log('Le mega bazar à éviter :');
let bazar = ['Soup', 42, new Date(), true];
console.log(bazar);
console.log(' ');

console.log('Chacunes des valeurs :');
for(let truc of bazar) {
    console.log(truc);
    
}

console.log(' ');
console.log('Chacune des valeurs mais en majuscule');
for(let truc of bazar) {
    // console.log(truc.toUpperCase()); 
    // Va faire planter tout le programme puisque, ça va fonctionner pour Soup (string) mais ça va planter dès 42 puisque je ne peux pas mettre un nombr en majuscule
}

console.log('------------------------');
console.log(' ');

// ! Déclarer un tableau
// On a créé un tableau qui s'appelle hobbies (nom Variable à utiliser) dans lequel on a mis 
// - dans la première case : "Pétanque"
// - dans la deuxième case : "Ricard"
// - dans la troisième case : "Poulet-Compote"
let hobbiesVide = [];
let hobbies = ['Pétanque', 'Ricard', 'Poulet-Compote'];
console.log(hobbies);
console.table(hobbies); //affichage plus structuré

// Si on essaie d'afficher le tableau entier dans la page, le navigateur étant incapable d'afficher un objet dans la page, appliquera la méthode .toString() sur le tableau. Cette méthode concatène toutes les valeurs présentes dans le tableau en les séparant par des ,
document.getElementById('affichage1').textContent = hobbies;

// ? Les cases des tableaux possèdent un index (aussi appelé indice) pour pouvoir consulter une case en particulier.
// Cet index commence toujours à 0
// L'index maximul vaudra toujours la taille de votre tableau - 1. (par ex ici, taille tableau 3, donc l'index max c'est 3 - 1 -> 2)
// * Si je veux afficher la valeur de la 2ème case, elle porte l'index 1
console.log( hobbies[1] ); //"Ricard"
console.log( hobbies[6] ); //undefined puisqu'il n'y a pas de valeur à l'index 6

// ! Accéder à la taille d'un tableau
console.log('Taille du tableau : ' + hobbies.length ); //Affiche le nombre d'éléments dans notre tableau // ici 3

// ! Ajouter un nouvel élément dans un tableau
// ? version 💩 et peu sécurisée
// on ajoute à l'index 3 qui n'a pas encore de valeur
hobbies[3] = 'Zumba';
console.log(hobbies);

// Va fonctionner mais entre l'indice 3 et l'indice 11, il y aura plein de cases vides
// hobbies[11] = 'Moussaka';
// console.log(hobbies);
// hobbies[0] = 'Mouettes'; //on va écraser Pétanque

// ? version 🥳 svp faites ça
// On va plutôt utiliser une méthode qui permet d'ajouter un élément à la fin d'un tableau existant ✅ C'est ce qu'on va le plus faire
hobbies.push('Voitures'); 
console.log(hobbies);

// Il existe cependant une méhtode qui permet d'ajouter au début du tableau mais elle est moins utilisée
hobbies.unshift('Pistaches');
console.log(hobbies);

// On vient de voir qu'on peut ajouter des éléments dans un tableau donc...
// ! Supprimer une valeur dans un tableau
console.clear();

// - déclarer un tableau vide
let technos = []; 

// - ajouter dans un tableau
technos.push('CSS'); //ajout fin tab
technos.push('JavaScript'); 

technos.unshift('HTML'); //ajout début tab
// - consulter une case en particulier
console.log( technos[0] );

// - afficher tout le tableau
console.log( technos );
// console.table( technos );

// ? - supprimer
// Peu utilisées mais elles ont le mérite d'exister
// technos.pop(); //supprime toujours le dernier élément
// console.log(technos);
// technos.shift(); //supprime toujours le premier élément
// console.log(technos);

// Il est rare qu'on veuille supprimer un élément qui se trouve au début ou à la fin uniquement. Souvent, on voudra plutôt supprimer un élément précis
// ! supprimer avec tableau.splice(indexDeDepart, nbElementASupp)
// nbElementASupp est optionnel mais si vous ne le mettez pas, supprime tout jusqu'à la fin
// technos.splice(1); //Supprime à partir de CSS jusqu'à la fin

technos.splice(1, 1); //Supprime juste CSS qui se trouve à l'index 1
console.log(technos);

// ? note : on utilise aussi beaucoup la méthode filter pour supprimer et on en aura besoin en React
//technos = technos.filter((t) => t !== 'CSS'); //on verra ça quand on verra les méthodes plus avancées sur les tableaux
//console.log(technos);

// ! Quelques méthodes utiles
const DIV_AFF_2 = document.getElementById('affichage2');

// DIV_AFF_2.textContent = technos;
// tableau.toString() -> Transforme un tableau en du texte (chaine) en concaténant tous les éléments du tableau et en les séparant par une virgule
//DIV_AFF_2.textContent = technos.toString(); //c'est moche 🤢
// join, permet de faire comme toString() mais en choisissant le séparateur
// si on laisse vide -> , (comme le toString())
// DIV_AFF_2.textContent = technos.join();
// si je mets une valeur
// DIV_AFF_2.textContent = technos.join(' | ');
DIV_AFF_2.textContent = technos.join(' - ');

// -------- 👆🏻 avec tout ça vous avez tout ce qu'il faut pour l'exo

// -------- 👇🏻 ça c'est du "bonus"
// inverser un tableau
console.clear();

const motsRigolos = ['Rouflaquette', 'Croûte', 'Cacahuète', 'Soupe', 'Salopette'];

console.log(motsRigolos);

motsRigolos.reverse();

console.log(motsRigolos);

// Trier un tableau
console.clear();

const notes = [12, 8, 1, 9, 17, 20, 212]
console.log(notes);
notes.sort();
console.log(notes); //le tri ne se fait pas sur les nombres mais sur le poids des caractères ascii

// on a donc besoin de fonction de comparaisons
// par ordre croissant
notes.sort((a, b) => a - b);
console.log(notes);

// par ordre décroissant
notes.sort((a, b) => b - a);
console.log(notes);

// Et si j'ai un tableau de chaines ?
const formateurs = ['Gavin', 'Aurélien', 'aude', 'grégory', 'mélanie', 'Quentin'];
console.log(formateurs);

// chaine par ordre croissant
formateurs.sort((a, b) => a.localeCompare(b) );
console.log(formateurs);

// chaine par ordre décroissant
formateurs.sort((chaine1, chaine2) => chaine2.localeCompare(chaine1) );
console.log(formateurs);































