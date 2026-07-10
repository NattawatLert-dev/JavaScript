// super = คีย์เวิร์ดที่ใช้ภายในคลาส เพื่อเรียก constructor
//         หรือเข้าถึง properties และ methods ของคลาสแม่ (Superclass)
//
//          this = อ้างถึงอ็อบเจ็กต์ปัจจุบัน (Current Object)
//          super = อ้างถึงคลาสแม่ (Parent Class / Superclass)

class Animal {

    constructor(name, age,) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log("The " + this.name + " moves at a speed of " + speed + "mph");
    }

}
class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log("This " + this.name + " can run");
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log("This " + this.name + " can swim");
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log("This " + this.name + " can fly");
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name); // rabbit

rabbit.run();

// This rabbit can run
// The rabbit moves at a speed of 25mph