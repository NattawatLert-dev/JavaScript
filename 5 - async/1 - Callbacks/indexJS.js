// callback = ฟังก์ชันที่ถูกส่งเข้าไปเป็นอาร์กิวเมนต์ให้กับฟังก์ชันอีกตัวหนึ่ง

//            ใช้สำหรับจัดการงานที่ทำแบบอะซิงโครนัส (Asynchronous Operations):
//            1. การอ่านไฟล์ (Reading a file)
//            2. การส่งคำขอผ่านเครือข่าย (Network requests)
//            3. การโต้ตอบกับฐานข้อมูล (Interacting with databases)

// Ex.1 ฟังก์ชัน greet รับพารามิเตอร์ 2 ตัว
// 1. name = ชื่อที่ต้องการทักทาย
// 2. callback = ฟังก์ชันที่จะถูกเรียกหลังจากทักทายเสร็จ
function greet(name, callback) {

    // แสดงข้อความทักทาย
    console.log("Hello " + name);

    // เรียกใช้ callback function
    callback();
}

// เรียกใช้ greet()
// ส่ง "Tle" เป็นชื่อ
// ส่ง Arrow Function เข้าไปเป็น callback
greet("Tle", () => {

    // ส่วนนี้จะทำงานเมื่อ callback() ถูกเรียก
    console.log("Welcome!");

});

// คำสั่งนี้จะทำงานหลังจาก greet() ทำงานเสร็จ
console.log("End");

//Ex.2
function hello(callback) {
    console.log("Hello!");
    callback();
}

function goodbye() {
    console.log("Goodbyd!");
}

hello(goodbye);

//Ex.3 ฟังก์ชัน calculate รับเลข 2 ตัว และฟังก์ชัน operation
function calculate(a, b, operation) {

    // เรียกใช้ฟังก์ชันที่รับมา
    // พร้อมส่ง a และ b เข้าไป
    return operation(a, b);
}

// ฟังก์ชันสำหรับบวก
function add(x, y) {
    return x + y;
}

// ฟังก์ชันสำหรับคูณ
function multiply(x, y) {
    return x * y;
}

// ส่งฟังก์ชัน add เข้าไปเป็น callback
console.log(calculate(10, 20, add));      // 30

// ส่งฟังก์ชัน multiply เข้าไปเป็น callback
console.log(calculate(10, 20, multiply)); // 200

//Ex.4
function displayPage(result) {
    document.getElementById("myText").textContent = result;
}

sum(displayPage, 1, 2);

//Ex.5 Callback แบบ Anonymous Function
calculate(10, 20, function (x, y) {
    console.log(x + y);
});

//Ex.6 Callback แบบ Asynchronous
console.log("A");

setTimeout(function () {
    console.log("B");
}, 3000);

console.log("C");

// A
// C
// B