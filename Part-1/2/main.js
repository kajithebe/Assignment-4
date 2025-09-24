'use strict';

const x1 = parseFloat(prompt('Enter X coordinate of Point 1:')) || 0;
const y1 = parseFloat(prompt('Enter Y coordinate of Point 1:')) || 0;
const x2 = parseFloat(prompt('Enter X coordinate of Point 2:')) || 0;
const y2 = parseFloat(prompt('Enter Y coordinate of Point 2:')) || 0;

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector('#point1').textContent = `(${x1}, ${y1})`;
document.querySelector('#point2').textContent = `(${x2}, ${y2})`;
document.querySelector('#distance').textContent = `${distance}`;
