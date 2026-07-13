// classList = คุณสมบัติ (Property) ของ Element ใน JavaScript
//             ที่ใช้สำหรับจัดการรายการคลาส (CSS Classes) ของ Element นั้น
//             ช่วยให้สามารถสร้างและนำคลาส CSS เดียวกัน ไปใช้ซ้ำกับหลาย Element ได้

// add()       = เพิ่มคลาส
// remove()    = ลบคลาส
// toggle()    = สลับสถานะของคลาส (ถ้ามีคลาสอยู่แล้วจะลบออก ถ้ายังไม่มีจะเพิ่มเข้าไป)
// replace()   = แทนที่คลาสเดิมด้วยคลาสใหม่ replace(oldClass, newClass)
// contains()  = ตรวจสอบว่า Element มีคลาสนั้นหรือไม่ คืนค่าเป็น true หรือ false

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "HI";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});