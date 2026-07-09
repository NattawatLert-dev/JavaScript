// variable = โครงสร้างที่ใช้เก็บค่าไว้ และสามารถใช้งานได้ราวกับว่าเป็นค่าที่เก็บอยู่ภายในนั้น

// 1. declaration   let x;
// 2. assignment    x = 1000;

let name = "Nattawat";

let age = 25;
let price = 10.99;
let gpa = 2.1;

let isStudent = true;

console.log(typeof age);
console.log("You are " + age + " years old");
console.log("The price is " + price);
console.log("Your gpa is: " + gpa);

document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = "You are " + age + " years old";
document.getElementById("p3").textContent = "Enrolled:" + isStudent;