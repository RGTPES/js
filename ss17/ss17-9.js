let a = parseInt(prompt("Moi ban nhap so a"));
let b = parseInt(prompt("Moi ban nhap so b"));
let c = parseInt(prompt("Moi ban nhap so c"));
 alert(`${a}x^2 + ${b}x + ${c}`) ;
 let denta = (b*b-4*a*c);
 if(denta<0){
    alert("vo nghiem");
 }
 else if(denta > 0){
    let x1= (-b + Math.sqrt(denta))/(2*a);
 let x2= (-b - Math.sqrt(denta))/(2*a);
 alert(`x1 = ${x1} and x2 =${x2}`); 
 }
 else{
    alert("Phuong trinh co nghiem kep");
 }

 