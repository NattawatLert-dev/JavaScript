// spread operator (...) = เครื่องหมาย ... ที่ใช้ขยาย (กระจาย)
//                         ข้อมูลที่เป็น iterable เช่น
//                         array หรือ string
//                         ให้แยกออกเป็นสมาชิกแต่ละตัว
//                         (เหมือนการแกะข้อมูลออกมา)

//Ex.1
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);

console.log(maximum); // 5

//Ex.2
let username = "Bro Code";
let letter = [...username].join("-");

console.log(letter); // B-r-o- -C-o-d-e

//Ex.3
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Orange", "Mango"];

const fruits = [...fruits1, ...fruits2, "egg", "milk"];

console.log(fruits);