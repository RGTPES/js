let sum =0;
let a = parseInt(prompt("nhap so "));
let b =  parseInt(prompt("nhap so "));
let c =  parseInt(prompt("nhap so "));
let d =  parseInt(prompt("nhap so "));
let e =  parseInt(prompt("nhap so "));
if(isNaN(a,b,c,d,e)){
    alert("khong hop le");
}else{
    if(a%2!==0){
        sum+=a;
    }if(b%2!==0){
        sum+=b;
    } if(c%2!==0){
        sum+=c;
    } if(d%2!==0){
        sum+=d;
    } if(e%2!==0){
        sum+=e;
    }        
}
alert(sum);