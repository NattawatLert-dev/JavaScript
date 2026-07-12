// Error = อ็อบเจ็กต์ (Object) ที่ถูกสร้างขึ้นเพื่อแสดงถึงปัญหา
//         หรือข้อผิดพลาดที่เกิดขึ้นระหว่างการทำงานของโปรแกรม
//
//         มักเกิดจากข้อมูลที่ผู้ใช้ป้อนเข้ามา (user input)
//         หรือระหว่างการสร้างการเชื่อมต่อ (connection)
//         เช่น การเชื่อมต่ออินเทอร์เน็ต ฐานข้อมูล หรือเซิร์ฟเวอร์

// try { } = ครอบโค้ดที่อาจเกิดข้อผิดพลาด (Error) ระหว่างการทำงาน
//
// catch { } = ดักจับ (Catch) และจัดการ (Handle) Error ที่ถูกโยน (throw) ออกมาจาก try { }
//
// finally { } = (ไม่บังคับ) ทำงานเสมอ ไม่ว่าจะเกิด Error หรือไม่ก็ตาม
//                มักใช้สำหรับการเก็บกวาดทรัพยากร (Clean up)
//                เช่น ปิดไฟล์ (close files)
//                    ปิดการเชื่อมต่อ (close connections)
//                    คืนทรัพยากรที่ใช้งาน (release resources)

//Ex.1
try {
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch (error) {
    console.error(error); // ReferenceError: x is not defined
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!");

//Ex.2
try {
    const divided = Number(window.prompt("Enter a divided: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }

    if (isNaN(divided) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = divided / divisor;
    console.log(result);
}
catch (error) {
    console.log(error);
}

console.log("You have reached the end!");