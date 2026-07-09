// SWITCH = สามารถใช้แทนคำสั่ง else if หลาย ๆ อันได้อย่างมีประสิทธิภาพ

let day;
const myTextBtn = document.getElementById("myTextBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const resultBtn = document.getElementById("resultBtn");

mySubmitBtn.onclick = function () {

    day = myTextBtn.value;

    switch (day) {
        case "Monday":
            resultBtn.textContent = "It's is Monday";
            break;
        case "Tuesday":
            resultBtn.textContent = "It's is Tuesday";
            break;
        case "Wednesday":
            resultBtn.textContent = "It's is Wednesday";
            break;
        case "Thursday":
            resultBtn.textContent = "It's is Thursday";
            break;
        case "Friday":
            resultBtn.textContent = "It's is Friday";
            break;
        case "Saturday":
            resultBtn.textContent = "It's is Saturday";
            break;
        case "Sunday":
            resultBtn.textContent = "It's is Sunday";
            break;
        default:
            resultBtn.textContent = day + " is not a day";
    }
}

// logical operators = ตัวดำเนินการเชิงตรรกะ (Logical Operators)
//                     ใช้สำหรับรวม หรือจัดการค่าบูลีน
//                     (true หรือ false)

//                     AND = &&
//                     OR = ||
//                     NOT = !