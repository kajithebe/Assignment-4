'use strict';

const side1 =
  parseFloat(prompt('Enter length of first side of the triangle:')) || 0;
const side2 =
  parseFloat(prompt('Enter length of second side of the triangle::')) || 0;
const side3 =
  parseFloat(prompt('Enter length of third side of the triangle::')) || 0;

let type = '';

if (side1 === side2 && side2 === side3) {
  type = 'Equilateral';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  type = 'Isosceles';
} else if (side1 != side2 || side1 != side3 || side2 != side3) {
  type = 'Scalene';
}

document.querySelector('#side1').textContent = `${side1}`;
document.querySelector('#side2').textContent = `${side2}`;
document.querySelector('#side3').textContent = `${side3}`;
document.querySelector('#type').textContent = `${type}`;
