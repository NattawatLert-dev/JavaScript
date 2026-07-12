// DOM Navigation = กระบวนการนำทาง (Navigation)
//                  ผ่านโครงสร้างของเอกสาร HTML
//                  โดยใช้ JavaScript

// .firstElementChild      // ลูก Element ตัวแรก
// .lastElementChild       // ลูก Element ตัวสุดท้าย
// .nextElementSibling     // Element พี่น้องตัวถัดไป
// .previousElementSibling // Element พี่น้องตัวก่อนหน้า
// .parentElement          // Element แม่ (Parent)
// .children               // ลูก Element ทั้งหมด

// ----------- .firstElementChild -----------

//เปลี่ยนแค่ที่เลือกตัวแรก
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

//เปลี่ยนแปลงตัวแรกทั้งหมด

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "lightblue";
});


// ----------- .lastElementChild -----------

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.background = "yellow";

// 
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastElement = ulElement.lastElementChild;
    lastElement.style.backgroundColor = "lightblue";
});


// ----------- .nextElementSibling -----------

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "red";

// ----------- .previousElementSibling -----------

const element = document.getElementById("banana");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ----------- .parentElement -----------

const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "lightblue";

// ----------- .children -----------

const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundColor = "red";

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});
