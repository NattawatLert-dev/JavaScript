// Callback Hell = สถานการณ์ใน JavaScript ที่ Callback
//                 ถูกซ้อนอยู่ภายใน Callback อีกหลายชั้น
//                 จนทำให้โค้ดอ่านยาก เข้าใจยาก และดูแลรักษายาก
//                 เป็นรูปแบบเก่าที่ใช้จัดการการทำงานแบบ Asynchronous
//                 ปัจจุบันนิยมใช้ Promises และ async/await
//                 เพื่อหลีกเลี่ยงปัญหา Callback Hell

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All task complete");
            });
        });
    });
});

// Task 1 Complete
// Task 2 Complete
// Task 3 Complete
// Task 4 Complete
// All task complete
