// static = คีย์เวิร์ดที่ทำให้ Property หรือ Method
//          เป็นสมาชิกของ Class
//
//          สมาชิกที่เป็น static
//          - มีเพียงชุดเดียว
//          - ใช้ร่วมกันทุก Object
//          - เรียกผ่านชื่อ Class
//          - ไม่สามารถเรียกผ่าน Object ได้
//
//          เหมาะสำหรับ
//          - ค่าคงที่ (Constants)
//          - ตัวนับจำนวน Object
//          - Utility Methods
//          - Helper Functions

//Ex.1
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getcircumference(radius) {
        return 2 * this.PI * radius;
    }

}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(10)); // 20

//Ex.2
class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log("There are " + User.userCount + "users online");
    }

    sayHello() {
        console.log("Hello, my username is " + this.username);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.username); // Spongebob
user1.sayHello(); // Hello, my username is Spongebob

console.log(User.userCount); // 2
User.getUserCount();