let a = Number(prompt("Moi ban nhap vao so a"));
let b = Number(prompt("Moi ban nhap vao so b"));
let c = prompt("Moi ban nhap vao cac phep tinh (+,-,*,/");
switch(c){
    case "+":
        alert(`ket qua cua phep tinh tren: a + b =`+  (a + b));
        break;
    case "-":
        alert(`ket qua cua phep tinh tren: a - b =`+  (a - b));
        break;
    case "*":
        alert(`ket qua cua phep tinh tren: a * b =`+  (a * b));
        break;
    case "/":
        alert(`ket qua cua phep tinh tren: a / b =`+  (a / b));
        break;            
}