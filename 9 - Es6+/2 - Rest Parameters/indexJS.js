// rest parameters = (...rest) ทำให้ฟังก์ชันสามารถรับจำนวน arguments ได้ไม่จำกัด
//                   โดยจะรวบรวม arguments ทั้งหมดไว้ใน Array
//
//                   spread = กระจาย Array ออกเป็นสมาชิกแต่ละตัว
//                   rest = รวมสมาชิกหลายตัวให้กลายเป็น Array

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));    // 60
console.log(sum(1, 2, 3, 4, 5)); // 15