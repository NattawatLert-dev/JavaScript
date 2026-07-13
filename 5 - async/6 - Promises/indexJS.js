// Promise = ออบเจ็กต์ (Object) ที่ใช้จัดการการทำงานแบบ Asynchronous
//           โดยนำโค้ดที่ทำงานแบบ Asynchronous มาอยู่ภายใน Promise
//           แนวคิดคือ "ฉันสัญญาว่าจะส่งค่ากลับมาในภายหลัง"
//           
//           สถานะของ Promise มีดังนี้
//           PENDING  -> กำลังทำงาน (ยังไม่เสร็จ)
//           RESOLVED -> ทำงานสำเร็จ (Fulfilled)
//           REJECTED -> ทำงานล้มเหลว (เกิดข้อผิดพลาด)
//
//           สร้าง Promise ด้วย
//           new Promise((resolve, reject) => {
//               // โค้ดแบบ Asynchronous
//           });

// ทำงานบ้านเหล่านี้ตามลำดับ

// 1. พาสุนัขไปเดินเล่น (WALK THE DOG)
// 2. ทำความสะอาดห้องครัว (CLEAN THE KITCHEN)
// 3. นำขยะไปทิ้ง (TAKE OUT THE TRASH)

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if (dogwalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2000);
    });
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakeOut = true;

            if (trashTakeOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You DID'T take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You finish all the task") })
    .catch(error => console.error(error));