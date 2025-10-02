//Déclarer un tableau

let hobbies = ['Pétanque','Ricard','Poulet-Compote'];



console.log(hobbies)

//* Si je veux afficher la valeur de la 2ème case, elle porte la valeur 1
console.log(hobbies[1]); //"Ricard"
console.log(hobbies[6]);// undefined puisqu'il n'y a pas de valeur à l'index 6

//! Acceder à la taille du tableau
console.log('Taille du tableau:'+hobbies.length); 
//*Affiche le bombre d'élément dans notre tableau // Ici 3 

//! Ajouter un nouvel élément au tableau
//? version 💩 
// on ajouter a l'index 3 qui n'a pas encore de valeur
hobbies[3] = 'Zumba';
console.log(hobbies)

//? version appropriée 
// On va plutôt utiliser une méthode qui permet d'ajouter un élment à la fin d'un tableau existant

hobbies.push('Nail art');

hobbies.unshift('Philologie')

let techno = ['HTML','CSS','JS'];
techno.push('C+');
// techno.unshift('Python');
console.log(techno);

//! Supprime un élément au tableau

//* Pop, supprime toujours le dernier éléments
techno.pop();
// console.log(techno);

//* techno.splice(1) / (indexDeDepart, nbElementASupp)
//* nbElementASupp est optionnel mais si vous ne le mettez pas, supprime tout jusqu'à la fin  
// techno.splice(1) // Supprime à partir de l'élement 1 jusqu'à la fin
// techno.splice(1,1) // Supprime juste l'élement 1 

// console.log(techno);

//! Quelques méthodes utiles

//* Convertir en chaîne de caractères
//* .toString()
//* Renvoie une chaîne de caractères représentant le tableau spécifié et ses éléments.

const DIV_AFF_2 = document.getElementById('demo')
//* DIV_AFF_2.textContent = techno; 
//* tableau.toString() --> transforme un tableau en chaine de caractère en concatétant tous les élements du tableau et en les séparant par une virgule/

DIV_AFF_2.textContent = techno.toString;

//* join([séparateur])
// Renvoie une chaîne de caractères en concaténant tous les éléments d'un tableau séparés par le séparateur (par défaut : «,»)

//* Join permet de faire comme toString() mais en choissisant le séparateur
// si on laisse vide --> , comme le comme toString() 
// si je mets une valeur
// * DIV_AFF_2.textContent = techno.join(' - ')


//* Inverser l’ordre des éléments
//* reverse()
console.clear();

const motsRigolos = ['Marches molles', 'Andouillette','Machin Bidule','Cucurbitacées','Ornithorynque']
motsRigolos.reverse(); //* inverse l'ordre

console.log(motsRigolos);

//* Trier un tableau
//* sort([methodeComparaison])
//? Permet de trier les éléments d’un tableau sur base d’une méthode qui doit retourner un nombre positif, négatif ou zéro.
// le tri ne se fait pas sur les nombre mais sur le poids des caractères ascii (askip) 
// donc pas besoin de fonction de comparaison 

//* Par ordre croissant

const notes = [8,23,42,15];
notes.sort(function(a,b){return a-b;});
console.log(notes)

//* Par ordre décroissant
notes.sort(function(a,b){return b-a;});
console.log(notes)

//* Pour un tableau de chaine
 const beatles = ['John','Ringo','Paul','George'];
 beatles.sort((a,b) => a.localeCompare(b)) 

 //* compare une string a la suivante selon les lettres
 console.log(beatles)
