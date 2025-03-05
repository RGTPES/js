// let a = prompt("nhap so");
// let result = 0;
// for(let i =0;i<a.length;i++){
//     a[i]=parseInt(a[i]);
//     result+=a[i]**3;
// }
// if(result == a){
//     alert("la so armstrong");}
// else{
//     alert("ko phai so armstrong");
// }
for(let i =100;i<1000;i++){
    let a = Math.floor(i/100);
    let b = Math.floor((i%100)/10);
    let c = i%10;
    if(i === a**3 + b**3 + c**3){
        console.log(i);
    }
}