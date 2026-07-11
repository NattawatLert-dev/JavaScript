
const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }];

fruits.push({ name: "grapges", color: "purple", calories: 62 });

fruits.pop();

fruits.splice(1, 2); // {apple}, {coconut}, {pineapple}

console.log(fruits[0].name); // apple

// -------- forEach() --------

fruits.forEach(fruits => console.log(fruits.name));

// -------- map() ----------

const fruitsNames = fruits.map(fruit => fruit.name);
const fruitsColor = fruits.map(fruit => fruit.color);

console.log(fruitsNames);

// -------- filter() ---------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// -------- reduce() ---------

const maxFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruits = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruits); // 159