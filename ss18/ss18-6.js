let year = Number(prompt("Moi ban nhap nam"));
if(year % 4 === 0 || year % 10 !== 0 && year % 400 === 0){
    alert(`${year} la nam nhuan`);
}else{
    alert(`${year} khong phai nam nhuan`);
}