const num = parseInt(prompt('Please enter a positive number.'));

if (num <= 0) {
  alert('Please enter a positive number greater than 0.');
} else {
  const tableContainer = document.querySelector('.container table');

  // Clear any content existing in the table, if any
  tableContainer.innerHTML = '';

  for (let i = 1; i <= num; i++) {
    //Add row for each i
    const row = document.createElement('tr');

    for (let j = 1; j <= num; j++) {
      // Inside each row, create j number of cells
      let cell = document.createElement('td');
      cell.innerText = i * j;

      // For each j, append the cell to row
      row.appendChild(cell);
    }

    // Apend all the rows to the table
    tableContainer.appendChild(row);
  }
}
