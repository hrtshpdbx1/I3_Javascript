console.log('coucou!!!') 
// les textes sont affiché en noir dans la console 


console.log(1989)
// les chiffres sont en vert clair dans la console

console.log('1989')
// mais si entre approstrope c'est un texte

console.log('J\'ai faim') 
// Backslash = [\] permet de montrer que l'apostrophe n'est pas une ligne de code

console.error('Oops, i did it again')
// affiche une erreur en rouge

console.warn ('Attentiooooon')
// ne fait pas planter mais bon 

alert('yo')
// affiche un message en mode pop up

// Créer une variable, qui permet de ranger une données
let signeAstro = prompt('Merci de renseigner ici ton signe astrologique');

// Pop-up pour demander une confirmation
// confirm();

// version plus sexy : Interpolation de chaine
let confirmation = confirm(`Cher ${signeAstro}, pensez vous qu\'il faille rendre la Bourgogne aux escargots ?`)


