'use strict';

/*
  Guessing Game
*/
const form = document.querySelector('form');
const output = document.querySelector('.output p');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');


function isNumber(num) {
  if (num.length > 0 && !isNaN(num) && num <= 50 & num >= 0) {
    return true;
  }
  return false;
}

function randomNumber() {
  return Math.floor(Math.random() * 50);
}

guess.addEventListener('click', function() {
  let a = number.value.trim();

  if (isNumber(a)) {
    if (isNumber(a) < randomNumber()) {
      output.innerText = 'My number is bigger';
    } else if (isNumber(a) > randomNumber()) {
      output.innerText = 'My number is smaller';
    } else {
      output.innerText = 'That\'s my number!'
    }
  } else {
    output.innerText = 'Please, enter valid a valid number between 1 and 50.';
  }
});