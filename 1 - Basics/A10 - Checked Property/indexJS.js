// .checked = คุณสมบัติ (property) ที่ใช้ตรวจสอบว่า
//            องค์ประกอบ HTML ประเภท checkbox หรือ radio button
//            อยู่ในสถานะ "ถูกเลือก (checked)" หรือไม่

const SubscribeBtn = document.getElementById("SubscribeBtn");
const VisaBtn = document.getElementById("VisaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PaypalBtn = document.getElementById("PaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {

    if (SubscribeBtn.checked) {
        subResult.textContent = "You are subscribed!";
    } else {
        subResult.textContent = "You are NOT subscribed!";
    }

    if (VisaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa";
    }
    else if (MasterCardBtn.checked) {
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if (PaypalBtn.checked) {
        paymentResult.textContent = "You are paying with PayPal";
    }
    else {
        paymentResult.textContent = "You must select a payment";
    }

}