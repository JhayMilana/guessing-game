'use strict';

/*
  Guessing Game
*/

function isNumber(num) {
  if (num.length > 0 && !isNaN(num)) {
    return true;
  }
  return false;
}

function randomNumber() {
  return Math.floor(Math.random() * 50);
}

randomNumber();
