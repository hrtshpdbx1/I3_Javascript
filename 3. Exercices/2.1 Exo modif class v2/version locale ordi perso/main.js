// # Exercice présentation :
// ## Etape 1) Récupérer élément HTML, Ajouter Evènement, Récupérer valeur input, Modifier Texte

// Dans la partie HTML, créer un input pour récupérer chacune de ces valeurs (prénom, nom, age)
// Créer un bouton pour rajouter l'évènement qu'au click, une phrase s'affiche dans un paragraphe 'Bonjour, je m'appelle Aude Beurive et je vais avoir 36 ans'
// // 


// textContent ou innerText

// ## Etape 2) Modification attribut
// Dans la partie html, rajouter un input de type url (c'est du texte)
// Rajouter le fait qu'au click, en plus des valeurs de l'étape 1, vous récupérez ce qui se trouve dans cet input pour afficher une image
// - Soit vous modifiez la source d'une image qui sera déjà présente mais vide dans le html
// - Soit vous ajoutez l'image dans le paragraphe de l'étape 1 avec innerHTML


const INPUT_NOM = document.getElementById('name');
const INPUT_PRENOM = document.getElementById('forname');
const INPUT_AGE = document.getElementById('age');

const BTN = document.getElementById('valider');
const RESPONSE = document.getElementById('divResponse');
const DIV_IMAGE = document.getElementById('DivImage');
const INPUT_URL = document.getElementById('userUrl');



BTN.addEventListener('click', () => {
    let name = INPUT_NOM.value;
    let forname = INPUT_PRENOM.value;
    let age = INPUT_AGE.valueAsNumber;
    let userUrl = INPUT_URL.value;

    RESPONSE.innerText = `Bonjour, ton nom est ${forname} ${name}, tu vas bientôt avoir ${age + 1} ans !`;
    DIV_IMAGE.src = userUrl;
});



const BTN_CLAIR = document.getElementById('btn_lightTheme');
const BTN_FONCE = document.getElementById('btn_darkTheme');

const CONTAINER1 = document.getElementById('containerForm');
const CONTAINER2 = document.getElementById('containerdroite');


BTN_CLAIR.addEventListener('click', () => {
CONTAINER1.classList.remove('themefonce');
CONTAINER2.classList.remove('themefonce');
CONTAINER1.classList.add('themeclair');
CONTAINER2.classList.add('themeclair');
});

BTN_FONCE.addEventListener('click', () => {
CONTAINER1.classList.remove('themeclair');
CONTAINER2.classList.remove('themeclair');
CONTAINER1.classList.add('themefonce'); 
CONTAINER2.classList.add('themefonce'); 
});

const BTN_YOURTHEME = document.getElementById('btn_yourTheme')

BTN_YOURTHEME.addEventListener('click', () => {
const couleurfond = prompt('Choisis une couleur pour le fond en hexadecimal (par exemple #4D27F5).'); 
const couleurtexte = prompt('donne une couleur pour le texte en hexadecimal (par exemple #EEF527).');
CONTAINER1.style.backgroundColor = couleurfond;
CONTAINER1.style.color = couleurtexte;
CONTAINER2.style.backgroundColor = couleurfond;
CONTAINER2.style.color = couleurtexte;
});


