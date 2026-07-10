// function = ส่วนของโค้ดที่สามารถนำกลับมาใช้ซ้ำได้
//            เขียนโค้ดเพียงครั้งเดียว แล้วนำไปใช้ได้ทุกเมื่อที่ต้องการ
//            เรียกใช้ (Call) ฟังก์ชันเพื่อให้โค้ดภายในฟังก์ชันทำงา

//Ex.1
function happyBirthday() {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
}

happyBirthday();

//Ex.2
function Birthday(name, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear " + name);
    console.log("Happy birthday to you!");
    console.log("You are " + age + " years old");
}

Birthday("Tle", 21);

//EX.3
function add(x, y) {
    let result = x + y;
    return result;
}

function substract(x, y) {
    return x - y;
}

function isEven(number) {

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {

    return email.includes("@") ? true : false;
}

console.log(add(2, 3));