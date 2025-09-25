const numbers = [];

for (let i = 1; i <= 5; i++) {
  let num = parseInt(
    prompt(
      `Enter the ${
        i == 1
          ? 'first'
          : i == 2
          ? 'second'
          : i == 3
          ? 'third'
          : i == 4
          ? 'fourth'
          : 'last'
      } number.`
    )
  );

  if (isNaN(num)) {
    alert('Please enter a valid number.');
    i--;
    continue;
  }

  numbers.push(num);
}

console.log(`Numbers: [${numbers}]`);

const tableContainer = document.querySelector('.container .original-table');
numbers.forEach((num, index) => {
  const row = document.createElement('tr');
  const titleCell = document.createElement('td');
  const dataCell = document.createElement('td');
  titleCell.innerText = `${
    index == 0
      ? 'First'
      : index == 1
      ? 'Second'
      : index == 2
      ? 'Third'
      : index == 3
      ? 'Fourth'
      : 'Fifth'
  } Number`;

  dataCell.innerText = num;
  row.appendChild(titleCell);
  row.appendChild(dataCell);
  tableContainer.appendChild(row);
});

const checkNum = parseInt(prompt('Enter a number to search:'));
if (numbers.includes(checkNum)) {
  document
    .querySelector('.container')
    .appendChild(
      document.createElement('h2')
    ).innerText = `Number ${checkNum} is found in the array.`;
} else {
  document
    .querySelector('.container')
    .appendChild(
      document.createElement('h2')
    ).innerText = `Number ${checkNum} is not found in the array.`;
}

numbers.pop(numbers.length - 1);
console.log(`Updated Numbers: [${numbers}]`);

const tableContainerModified = document.querySelector(
  '.container .modified-table'
);
numbers.forEach((num, index) => {
  const newRow = document.createElement('tr');
  const titleCell = document.createElement('td');
  const valueCell = document.createElement('td');

  titleCell.innerText = `${
    index == 0
      ? 'First'
      : index == 1
      ? 'Second'
      : index == 2
      ? 'Third'
      : 'Fourth'
  } Number`;
  valueCell.innerText = num;

  newRow.appendChild(titleCell);
  newRow.appendChild(valueCell);
  tableContainerModified.appendChild(newRow);
});

const sortedArray = numbers.sort((a, b) => a - b);
console.log(`Sorted Numbers: [${numbers}]`);

const tableContainerSorted = document.querySelector('.container .sorted-table');

sortedArray.forEach((num, index) => {
  const sortedRow = document.createElement('tr');
  const titleCell = document.createElement('td');
  const valueCell = document.createElement('td');

  titleCell.innerText = `${
    index == 0
      ? 'First'
      : index == 1
      ? 'Second'
      : index == 2
      ? 'Third'
      : 'Fourth'
  } Number`;
  valueCell.innerText = num;

  sortedRow.appendChild(titleCell);
  sortedRow.appendChild(valueCell);
  tableContainerSorted.appendChild(sortedRow);
});
