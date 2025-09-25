const numbers = [];

let exit = false;

while (!exit) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input.toLowerCase() === 'done') {
    exit = true;
  } else {
    if (isNaN(input)) {
      alert('Please enter a valid number.');
      continue;
    }
    numbers.push(input);
  }
}
alert('Click ok to see the result.');

const evenNum = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNum.push(num);
  }
}

document.querySelector('.result').textContent = `Even Number(s): ${evenNum.join(
  ', '
)} `;

document.querySelector('.bye').textContent = `Thank you! See you again!`;
