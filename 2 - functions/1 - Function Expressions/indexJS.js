// Function Declaration = การประกาศฟังก์ชันเพื่อรวบรวมชุดคำสั่งไว้ในที่เดียว
// ใช้สำหรับเรียกใช้งานซ้ำได้หลายครั้ง โดยแต่ละฟังก์ชันควรมีหน้าที่เฉพาะ (Single Responsibility)

// ==========================
// EXAMPLE 1
// ==========================

// ประกาศฟังก์ชันชื่อ greet()
// รับข้อมูลเข้ามา 1 ตัว คือ name
function greet(name) {

    // แสดงข้อความทักทาย
    console.log(`สวัสดี ${name}`);
}

// ส่งค่า "John" เข้าไปในตัวแปร name
greet("John");

// ==========================
// EXAMPLE 2
// ==========================

// ฟังก์ชันสำหรับหาผลบวกของตัวเลข 2 จำนวน
function add(a, b) {

    // นำ a + b แล้วคืนค่ากลับไป
    return a + b;
}

// เรียกใช้ฟังก์ชัน
let result = add(10, 20);

console.log(result);

// function expressions = การสร้างฟังก์ชันแล้วนำไปเก็บไว้ในตัวแปรเพื่อให้สามารถเรียกใช้งานผ่านตัวแปรนั้นได้

// 1. Callbacks in asynchronous operations = Callback ที่ใช้กับการทำงานแบบอะซิงโครนัส (ไม่ต้องรอให้เสร็จก่อน)

// 2. Higher-Order Functions = ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์หรือคืนค่ากลับเป็นฟังก์ชัน

// 3. Closures = ฟังก์ชันที่สามารถเข้าถึงตัวแปรจาก Scope ภายนอกได้ แม้ว่าฟังก์ชันภายนอกจะทำงานเสร็จแล้ว

// 4. Event Listeners = ตัวดักจับเหตุการณ์ (Event) เมื่อเกิดเหตุการณ์ที่กำหนด จะเรียกฟังก์ชันที่ผูกไว้

// ==========================
// EXAMPLE 1
// ==========================

// สร้างฟังก์ชันแล้วเก็บไว้ในตัวแปร greet
const greet = function (name) {
    console.log(`สวัสดี ${name}`);
};

// เรียกใช้งานผ่านชื่อตัวแปร greet
greet("เติ้ล");
greet("John");

// ==========================
// EXAMPLE 2
// ==========================

// สร้างฟังก์ชันสำหรับหาผลบวก
const add = function (a, b) {

    // คืนค่าผลบวก
    return a + b;
};

// เก็บค่าที่ได้จากฟังก์ชัน
let result = add(10, 20);

console.log(result);

// ==========================
// EXAMPLE 3 = ใช้เป็น Callback Function
// ==========================

// Function Expression นิยมใช้กับ Callback
const numbers = [10, 20, 30];

// ส่งฟังก์ชันเข้าไปให้ forEach()
numbers.forEach(function (number) {

    // ทำงานกับสมาชิกแต่ละตัวใน Array
    console.log(number);
});

// ==========================
// EXAMPLE 4
// ==========================

const numbers = [1, 2, 3, 4, 5];

const square = numbers.map(function (element) {
    return Math.pow(element, 2)
});

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(square); // [1, 4, 9, 16, 25]