// arrow functions = วิธีเขียน Function Expression แบบย่อเหมาะสำหรับฟังก์ชันที่เรียบง่าย
//                   และใช้งานเพียงครั้งเดียว
//                   (parameters) => some code

// ==========================
// EXAMPLE 1
// ==========================

const hello = () => console.log("Hello");

hello(); // Hello

// ==========================
// EXAMPLE 2
// ==========================

const hello = (name) => console.log("Hello" + name);

hello("Tle"); // Hello Tle

// ==========================
// EXAMPLE 3
// ==========================

const hello = (name, age) => {
    console.log("Hello" + name)
    console.log("You are " + age + " years old")
};

hello("Tle", 21);

// ==========================
// EXAMPLE 4
// ==========================

setTimeout(() => console.log("hello"), 3000);

// ==========================
// EXAMPLE 5
// ==========================

// ฟังก์ชันหาผลบวก
const add = (a, b) => {

    // ส่งค่าผลบวกกลับ
    return a + b;
};

// เรียกใช้งาน
let result = add(10, 20);

console.log(result);

// ==========================
// EXAMPLE 6
// ==========================

const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(square);