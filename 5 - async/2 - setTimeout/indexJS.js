// setTimeout() = ฟังก์ชันใน JavaScript ที่ช่วยให้คุณสามารถกำหนดเวลา
//                ให้ฟังก์ชันทำงานหลังจากผ่านไประยะเวลาหนึ่ง (หน่วยเป็นมิลลิวินาที)
//                เวลาที่กำหนดเป็นค่าโดยประมาณ (อาจคลาดเคลื่อนได้ ขึ้นอยู่กับภาระงาน
//                ของ JavaScript Runtime Environment)

//                setTimeout(callback, delay);
//                clearTimeout() = สามารถยกเลิกการตั้งเวลาของ setTimeout() ได้ก่อนที่มันจะถูกเรียกใช้งาน

//Ex.1
function sayHello() {
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

//Ex.2
setTimeout(() => window.alert("Hello"), 3000);

//Ex.3
let timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

//Ex.4
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTER");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEAR");
}