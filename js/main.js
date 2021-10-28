/**
 * FizzBuzzDom
 */

//Riferimento container
const squares = document.querySelector('.squares')

//generazione quadratini
 

for (let i = 1; i <= 100; i++) {

//inserimento generazione fizzbuzz/ fizz / buzz
     if (i % 15 == 0) {
        console.log('FizzBuzz')
        element = '<div class="square square-fizzbuzz">fizzbuzz</div>';
    } else if (i % 3 == 0) {
        element = '<div class="square square-fizz">fizz</div>';
        console.log('fizz');
    } else if (i % 5 == 0) {
        element = '<div class="square square-buzz">buzz</div>';
        console.log('buzz');
    } else {
        element =`<div class="square">${i}</div>`;
        console.log(i);
    }

    squares.innerHTML += element;
};
 