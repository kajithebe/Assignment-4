'use strict';

const input = Number(prompt('Enter the temperature in Celsius:') || 0);

const temp_fahrenheit = (input * 9) / 5 + 32;
const temp_kelvin = input + 273.15;

document.querySelector('#celsius').textContent = input;
document.querySelector('#fahrenheit').textContent = temp_fahrenheit;
document.querySelector('#kelvin').textContent = temp_kelvin;
