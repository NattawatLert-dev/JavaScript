// Nested Objects = Object ที่อยู่ภายใน Object อื่น
//                  ช่วยให้สามารถแทนโครงสร้างข้อมูลที่ซับซ้อนมากขึ้นได้
//                  Object ลูก (Child Object) จะถูกเก็บอยู่ภายใน
//                  Object แม่ (Parent Object)

//                  Person { Address{}, ContactInfo{} }
//                  ShoppingCart { Keyboard{}, Mouse{}, Monitor{} }

//Ex.1
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "123 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);   // Spongebob Squarepants
console.log(person.age);        // 30
console.log(person.isStudent);  // true
console.log(person.hobbies[1]); // jellyfishing
console.log(person.address);    /* street: "123 Conch St.",
                                   city: "Bikini Bottom",
                                   country: "Int. Water"
                                */
console.log(person.address.city); // Bikini Bottom     

for (const property in person.address) {
    console.log(person.address[property]);
}

//Ex.2
class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address {

    constructor(street, city, county) {
        this.street = street;
        this.city = city;
        this.country = county;
    }

}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.address);
console.log(person1.address.city); // Bikini Bottom