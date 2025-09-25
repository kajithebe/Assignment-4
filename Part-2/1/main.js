const fruits = ['apple', 'banana', 'orange', ' grape', 'kiwi'];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

const vagetables = [];
for (let i = 1; i <= 3; i++) {
  let input = prompt(
    `Enter the name of ${
      i == 1 ? 'first' : i == 2 ? 'second' : 'third'
    } vagetable:`
  );
  vagetables.push(input);
}
console.log(vagetables);
console.log(vagetables.length);
