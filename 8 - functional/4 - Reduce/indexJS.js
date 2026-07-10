// .reduce() = ลด (รวม) element ทั้งหมดใน array
//             ให้เหลือเป็นค่าเดียว (single value)

//Ex.1
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log("$" + total.toFixed(2)); // $105.00

function sum(accumulator, element) {
    return accumulator + element;
}

//Ex.2
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum); // 95

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}