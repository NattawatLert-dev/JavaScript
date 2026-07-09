// Arithmetic Operators = ตัวดำเนินการทางคณิตศาสตร์ใช้กับตัวถูกดำเนินการ (operands)
//                        เช่น ค่า (values), ตัวแปร (variables) เป็นต้น โดยใช้ตัวดำเนินการ (+ - * /)
//                        ตัวอย่าง: x = 11 + 5;

let students = 30;

students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

console.log(students);

/*
  Operator precedence = ลำดับความสำคัญของตัวดำเนินการ
  (ตัวดำเนินการที่มีลำดับความสำคัญสูงกว่าจะถูกคำนวณก่อน)

  1. parenthesis ()   = วงเล็บ ()
  2. exponents (**)   = ยกกำลัง
  3. multiplication, division, and modulo (* / %)   = คูณ, หาร และหารเอาเศษ
  4. addition & subtraction (+ -)    = บวก และลบ
*/

let result = 1 + 2 * 3 + 4 ** 2

console.log(result);