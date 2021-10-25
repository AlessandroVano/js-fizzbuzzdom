/**
 * FizzBuzzDom
 */

//Riferimento container
const squares = document.querySelector('.squares')

//generazione quadratini
 

for (let i = 1; i <= 100; i++) {

    squares.innerHTML += `<div class="square square-${i}">${i}</div>`; 
//prova
    if (i % 15 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
};

