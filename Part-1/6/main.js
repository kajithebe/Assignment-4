const num = parseInt(prompt('Please enter a positive number.'));

if (num <= 0) {
  alert('Please enter a positive number greater than 0.');
} else {
  const tableContainer = document.querySelector('.container table');
  tableContainer.innerHTML = '';

  for (let i = 1; i <= num; i++) {
    const row = document.createElement('tr');

    for (let j = 1; j <= num; j++) {
      let cell = document.createElement('td');
      cell.innerText = i * j;
      row.appendChild(cell);
    }

    tableContainer.appendChild(row);
  }
}
