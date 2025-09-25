const numbers = [85, 98, 25, 19, 44, 28, 45, 87, 56, 96];

function sortArray(array, order) {
  if (order === 'asc') {
    return [...array].sort((a, b) => a - b);
  } else if (order === 'desc') {
    return [...array].sort((a, b) => b - a);
  } else {
    return [...array];
  }
}

const ascArray = sortArray(numbers, 'asc');

document.querySelector(
  '#original'
).textContent = `Original array: [${numbers.join(', ')}]`;

const descArray = sortArray(numbers, 'desc');
document.querySelector(
  '#ascending'
).textContent = `Ascendingly Sorted Array: [${ascArray.join(', ')}]`;
document.querySelector(
  '#descending'
).textContent = `Descendingly Sorted Array: [${descArray.join(', ')}]`;

console.log(ascArray);
console.log(descArray);
