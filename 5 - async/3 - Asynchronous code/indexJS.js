// synchronous = การทำงานแบบเรียงลำดับทีละบรรทัด (Sequential)
//               โค้ดจะรอให้คำสั่งปัจจุบันทำงานเสร็จก่อน
//               แล้วจึงทำงานในคำสั่งถัดไป

// asynchronous = การทำงานแบบไม่ต้องรอคำสั่งก่อนหน้าให้เสร็จ
//                ทำให้หลายงานสามารถดำเนินไปพร้อมกันได้
//                ไม่ขัดขวางลำดับการทำงานของโปรแกรม
//                โปรแกรมสามารถทำงานส่วนอื่นต่อได้
//                (เช่น การทำงานด้าน I/O, การส่งคำขอผ่านเครือข่าย,
//                หรือการดึงข้อมูลจากเซิร์ฟเวอร์)
//                มักจัดการด้วย: Callbacks, Promises และ Async/Await

//Ex.1 Async
setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

/*
Task 2
Task 3
Task 4
Task 1
*/

//Ex.2
function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback()
    }, 3000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);

/*
Task 1
Task 2
Task 3
Task 4
*/