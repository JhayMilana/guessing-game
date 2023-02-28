'use strict';

/*
  Guessing Game
*/
const form = document.querySelector('form');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const output = document.querySelector('.output p');

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
  let b = randomNumber();
  let c = isNumber(a);

  if (isNumber(a)) {
    if (c < b) {
      output.innerText = 'My number is bigger';
      number.value = '';
    } else if (c > b) {
      output.innerText = 'My number is smaller';
      number.value = '';
    } else if (c = b) {
      output.innerText = 'That\'s my number!';
      number.value = '';
    }
  } else {
    output.innerText = 'Please, enter valid a valid number between 1 and 50.';
  }
});