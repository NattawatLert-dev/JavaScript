// Async/Await = async = ทำให้ฟังก์ชันคืนค่า (return) เป็น Promise โดยอัตโนมัติ
//               await = ทำให้ฟังก์ชัน async รอผลลัพธ์ของ Promise ก่อนทำงานต่อ
//
//               ช่วยให้สามารถเขียนโค้ดแบบ Asynchronous
//               ให้มีลักษณะเหมือนโค้ดแบบ Synchronous (อ่านง่ายและเป็นลำดับ)
//
//               async ไม่ต้องใช้พารามิเตอร์ resolve หรือ reject
//               เหมือนกับการสร้าง Promise ด้วย new Promise()
//
//               โค้ดที่อยู่หลัง await จะรอจนกว่า Promise จะเสร็จสิ้น
//               จากนั้นจึงถูกนำกลับเข้าสู่ Event Queue เพื่อทำงานต่อ

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

async function doChores() {

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finisihed all the choice!");
    }
    catch (error) {
        console.error(error);
    }

}

doChores();