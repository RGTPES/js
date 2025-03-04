let n = +prompt("moi ban nhap so");
let a =0;
if(isNaN(n)||n<0){
    alert("ko dung du lieu")
}else {
    for(let i =0;i<=n;i++){
        a+=i
}
alert(a);
}
