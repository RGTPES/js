let num = +prompt("Moi ban nhap so");
let flag =0;
for(let i =0;i<=num;i++){
    if(num % i ===0){
        flag++;
    }
}
if(flag === 2){
    alert(`${num} la so nguyen to`);
}else{
    alert(`${num} ko phai la so nguyen to`);
}