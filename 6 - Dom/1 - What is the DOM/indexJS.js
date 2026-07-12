// DOM = Document Object Model (โมเดลอ็อบเจ็กต์ของเอกสาร)
//
//       เป็น Object ที่ใช้แทนหน้าเว็บ (Web Page)
//       ที่คุณเห็นอยู่ในเว็บเบราว์เซอร์
//
//       และมี API ให้ JavaScript ใช้โต้ตอบกับหน้าเว็บได้
//
//       เมื่อเบราว์เซอร์โหลดเอกสาร HTML มันจะสร้าง DOM ขึ้นมา
//
//       โดยจัดโครงสร้างของทุก Element ให้อยู่ในรูปแบบต้นไม้ (Tree Structure)
//
//       JavaScript สามารถเข้าถึง DOM เพื่อเปลี่ยนแปลงเนื้อหา (Content)
//       โครงสร้าง (Structure) และ รูปแบบการแสดงผล (Style)
//       ของหน้าเว็บได้แบบไดนามิก (Dynamic)

//Ex.1
document.title = "My website";

console.dir(document);

//Ex.2
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

//Ex.3
const username = "Bro code";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;