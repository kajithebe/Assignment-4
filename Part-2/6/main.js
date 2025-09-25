const numMovie = parseInt(
  prompt('How many number of movies you want to store?')
);

const movies = [];

for (let i = 1; i <= numMovie; i++) {
  const name = prompt(`Enter name of the movie ${i}: `);

  let rating;

  do {
    rating = prompt(`Enter rating of the movie ${name} (1 - 5): `);
  } while (isNaN(rating) || rating < 1 || rating > 5);

  movies.push({title: name, rating: Number(rating)});
}

const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

const tableContainer = document.querySelector('table tbody');
tableContainer.textContent = '';

sortedMovies.forEach((obj, _) => {
  console.log(obj);
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.classList.add('title');
  nameCell.textContent = obj.title;

  const ratingCell = document.createElement('td');
  ratingCell.classList.add('rating');
  ratingCell.textContent = obj.rating;

  row.appendChild(nameCell);
  row.appendChild(ratingCell);
  tableContainer.appendChild(row);
});

document.querySelector('.highestRated').textContent = sortedMovies[0].title;
