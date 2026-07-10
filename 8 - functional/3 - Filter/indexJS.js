// .filter() = รับ callback function แล้วตรวจสอบสมาชิกทุกตัวใน array
//              หากเงื่อนไขเป็น true จะเก็บไว้หากเป็น false จะตัดออก
//              และคืนค่าเป็น array ใหม่

//Ex.1
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums); // [2, 4, 6]
console.log(oddNums); // [1, 3, 5, 7]

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

//Ex.2
let ages = [16, 17, 18, 18, 19, 20, 60];
let adults = ages.filter(isAdult);

console.log(adults); // [18, 18, 19, 20, 60]

function isAdult(element) {
    return element >= 18;
}

//Ex.3
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);

function getShortWords(element) {
    return words.length <= 6;
}

function getLongWords(element) {
    return words.length >= 6;
}

//Ex.4
const number = [1, 2, 3, 4, 5, 6];

const evenNumbers = number.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
console.log(number);      // [1, 2, 3, 4, 5, 6]