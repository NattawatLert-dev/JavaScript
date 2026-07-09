// array = โครงสร้างข้อมูลที่มีลักษณะคล้ายตัวแปร
//         ซึ่งสามารถเก็บข้อมูลได้มากกว่า 1 ค่า

let fruits = ["apple", "orange", "banana"];

fruits.push("pineapple"); // เพิ่มที่ท้าย
fruits.pop(); // ลบตัวท้ายออก
fruits.unshift("mango"); // เพิ่มข้างหน้า
fruits.shift(); // ลบตัวหน้า  

let numOfFruits = fruits.length;
let index = fruits.indexOf("orange"); // 1

fruits.sort().reverse();

fruits[1] = "coconut";

console.log(fruits[0]); // apple

//Ex.1
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}

//Ex.2
for (let fruit of fruits) {
    console.log(fruit);
}