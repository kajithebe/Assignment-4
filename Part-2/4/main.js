const numbers = [67, 24, 53, 89, 41, 76, 14, 92, 38, 55, 61, 97, 22, 46, 83];

function sortArray(array) {
  return [...array].sort((a, b) => a - b);
}

const sortedArray = sortArray(numbers);
console.log(sortedArray);

document.querySelector(
  '.original'
).textContent = `Original array: [${numbers.join(', ')}]`;

document.querySelector(
  '.sorted'
).textContent = `Sorted Array: [${sortedArray.join(', ')}]`;
