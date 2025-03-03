let num = +prompt("Moi ban nhap so");
if(num % 5 == 0 && num % 3 == 0){
    alert(`${num} chia het cho ca 3 va 5`)
}else if(num % 5 !=0 || num %3 != 0){
    alert(`${num} ko chia het cho ca 3 va 5`)
}