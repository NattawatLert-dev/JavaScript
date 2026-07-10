// constructor = เมธอดพิเศษ (Special Method)
//               ที่ใช้กำหนดค่าเริ่มต้น (Initialize)
//               ให้กับ Properties และ Methods ของ Object
//
//               constructor จะถูกเรียกใช้อัตโนมัติ
//               เมื่อมีการสร้าง Object ใหม่ด้วยคำสั่ง new

//Ex.1
function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color
    this.drive = function () { console.log("You drive the " + this.model) }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

//Ex.2
class Person {

    // constructor จะทำงานเมื่อสร้าง Object ใหม่
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const person1 = new Person("Tle", 20);
const person2 = new Person("John", 25);

console.log(person1.name); // Tle
console.log(person2.age);  // 25