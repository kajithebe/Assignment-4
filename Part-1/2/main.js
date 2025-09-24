'use strict';

const coordinate = prompt(
  'Enter X and Y coordinates of two points (separated by space):'
);

if (coordinate) {
  const points = coordinate.split(' ');

  const x1 = parseInt(points[0]) || 0;
  const y1 = parseInt(points[1]) || 0;
  const x2 = parseInt(points[2]) || 0;
  const y2 = parseInt(points[3]) || 0;

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  document.querySelector('#point1').textContent = `(${x1}, ${y1})`;
  document.querySelector('#point2').textContent = `(${x2}, ${y2})`;
  document.querySelector('#distance').textContent = `${distance}`;
}
