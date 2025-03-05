let chan =0;
let le = 0;
let a = parseInt(prompt("nhap so "));
let b =  parseInt(prompt("nhap so "));
let c =  parseInt(prompt("nhap so "));
let d =  parseInt(prompt("nhap so "));
let e =  parseInt(prompt("nhap so "));
if(isNaN(a,b,c,d,e)){
    alert("khong hop le");
}else{
    if(a%2!==0){
        chan++;
    }else{
        le++;
    }
    if(b%2!==0){
        chan++;
    }else{
        le++;
    }
    if(c%2!==0){
        chan++;
    }else{
        le++;
    } 
    if(d%2!==0){
        chan++;
    }else{
        le++;
    } if(e%2!==0){
        chan++;
    }else{
        le++;
    }     
}
alert(chan); 
alert(le); 