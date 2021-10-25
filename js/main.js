/**
 * FizzBuzzDom
 */

//Riferimento container
const squares = document.querySelector('.squares')

//generazione quadratini
 

for (let i = 1; i <= 100; i++) {
    squares.innerHTML += `<div class="square square-${i}">${i}</div>`; 
};

