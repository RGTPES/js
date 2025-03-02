let a = Number(prompt("Moi ban nhap do dai 1 canh tam giac"));
let b = Number(prompt("Moi ban nhap do dai 1 canh tam giac"));
let c = Number(prompt("Moi ban nhap do dai 1 canh tam giac"));
if(a+b>c&&a+c>b&&b+c>a){
    if(a===b&&b===c){
        alert("la tam giac deu");
    }
    else if(a===b||c===b||c===a){
        alert("la tam giac can");
    }
    else if(a**2===b**2+c**2||b**2===a**2+c**2||c**2===b**2+a**2 ){
        alert("la tam giac vuong");
    }
    else{
        alert("la tam giac thuong");
    }
}else{
    alert("ko phai do dai 3 canh tam giac");
}