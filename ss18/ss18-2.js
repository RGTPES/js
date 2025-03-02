let a = Number(prompt("Nhap diem toan"));
let b = Number(prompt("Nhap diem van"));
let c = Number(prompt("Nhap diem anh"));
let d = ((a+b+c)/3);
if(d>8){
    alert("Gioi");
}
else if(d>6.5){
    alert("Kha");
}
else if(d>5){
    alert("Trung binh");
}
else{
    alert("Yeu");
}