// Destructuring = การแยกค่าจาก Array และ Object
//                 แล้วนำค่าที่แยกออกมาไปเก็บไว้ในตัวแปรได้อย่างสะดวก
//                 [] = ใช้สำหรับการ Destructuring ของ Array
//                 {} = ใช้สำหรับการ Destructuring ของ Object

// ---------- EXAMPLE 1 --------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// ---------- EXAMPLE 2 --------------
// SWAP 2 ELEMENTS IN AN ARRAY

const color = ["red", "green", "blue", "black", "white"];

[color[0], color[4]] = [color[4], color[0]];

console.log(color); // ["white", "green", "blue", "black", "red"]

// ---------- EXAMPLE 3 --------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColor] = color;

console.log(firstColor);  // red
console.log(secondColor); // green
console.log(thirdColor);  // blue
console.log(extraColor);  // ["black", "white"]

// ---------- EXAMPLE 4 --------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const { firstName, lastName, age, job } = person1;

console.log(firstName); // Spongebob
console.log(lastName);  // SquarePants
console.log(age);       // 30
console.log(job);       // Fry Cook

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName); // Patrick
console.log(lastName);  // Star
console.log(age);       // 34
console.log(job);       // Unemployed

// ---------- EXAMPLE 5 --------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log("name:" + firstName + " " + lastName);
    console.log("age: " + age);
    console.log("job:" + job);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);