// 'use strict';

const num = Number(prompt('Enter a positive number:')) || 0;

let sum = 0;
if (num < 0) {
  alert('Please enter positive number.');
} else {
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
}

document.querySelector('#number').textContent = `${num > 0 ? num : ''}`;
document.querySelector('#sum').textContent = `${sum}`;
