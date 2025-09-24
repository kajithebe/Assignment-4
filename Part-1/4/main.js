'use strict';

const score = parseFloat(prompt('Enter your score:')) || 0;

let grade = '';

if (score < 0) {
  alert("Score can't be negative.");
} else if (score <= 39) {
  grade = 0;
} else if (score <= 51) {
  grade = 1;
} else if (score <= 63) {
  grade = 2;
} else if (score <= 75) {
  grade = 3;
} else if (score <= 87) {
  grade = 4;
} else {
  grade = 5;
}

document.querySelector('#score').textContent = `${score > 0 ? score : ''}`;
document.querySelector('#grade').textContent = `${grade}`;
