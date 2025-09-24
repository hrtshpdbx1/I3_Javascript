const INPUT_NB1 = document.getElementById('nb1');
const INPUT_NB2 = document.getElementById('nb2');
const BTN_ADDITION = document.getElementById('btn_addition');
const BTN_SOUSTRACTION = document.getElementById('btn_soustraction');
const BTN_MULTIPLICATION = document.getElementById('btn_multiplication');
const BTN_DIVISION = document.getElementById('btn_division');
const BTN_POURCENTAGE = document.getElementById('btn_pourcentage');
const INPUT_RESULTAT = document.getElementById('input_resultat');
// const BTN_RESET = document.getElementById('reset')


// Addition
BTN_ADDITION.addEventListener('click', () => {
  const nb1 = INPUT_NB1.valueAsNumber;
  const nb2 = INPUT_NB2.valueAsNumber;
  let addition = nb1 + nb2;
  INPUT_RESULTAT.value = addition
});



// La soustraction
BTN_SOUSTRACTION.addEventListener('click', () => {
  INPUT_RESULTAT.value = '0';
  let nb1 = INPUT_NB1.valueAsNumber;
  let nb2 = INPUT_NB2.valueAsNumber;
  let soustraction = nb1 - nb2;
  INPUT_RESULTAT.value = soustraction
});

// La multiplication
BTN_MULTIPLICATION.addEventListener('click', () => {
  INPUT_RESULTAT.value = '0';
  let nb1 = INPUT_NB1.valueAsNumber;
  let nb2 = INPUT_NB2.valueAsNumber;
  let multiplication = nb1 * nb2;
  INPUT_RESULTAT.value = multiplication;
});

// La division (normale)
BTN_DIVISION.addEventListener('click', () => {
  INPUT_RESULTAT.value = '0';
  let nb1 = INPUT_NB1.valueAsNumber;
  let nb2 = INPUT_NB2.valueAsNumber;
  let division = nb1 / nb2;
  INPUT_RESULTAT.value = division;

});

// Rourcentage
BTN_POURCENTAGE.addEventListener('click', () => {
  INPUT_RESULTAT.value = '0';
  let nb1 = INPUT_NB1.valueAsNumber;
  let nb2 = INPUT_NB2.valueAsNumber;
  let pourcentage = nb1 * (nb2 / 100);
  INPUT_RESULTAT.value = pourcentage

});


const BTN_RESET = document.getElementById('reset')

// AC
BTN_RESET.addEventListener('click', () => {
  INPUT_RESULTAT.value = '0';
  INPUT_NB1.value = '';
  INPUT_NB2.value = '';


});

