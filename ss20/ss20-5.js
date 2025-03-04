let a = +prompt("nhap so ");
let b = +prompt("nhap so  ");
let c = a;
if(isNaN(a) || isNaN(b)){
    alert("khong hop le");
}else{
    for(let i =1;i<b;i++){
        c*=a;
        
    }  
alert(c);
}