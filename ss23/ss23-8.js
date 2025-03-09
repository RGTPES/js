let n = +prompt("Moi ban nhap");
count=0;
let number = [];
if(n==0){
    console.log("mang ko co phan tu");
}
else if(n<0){
    console.log("khong hop le");
}


else{
    for(let i =0;i<n;i++){
        number.push(+prompt("Moi ban nhap phan tu thu "+(i+1)));
    }
   for(let i =0;i<number.length-2;i++){
    if(number[i]+number[i+1]!=number[i+2]){
        count++;
    }
   }
   if(count==0){
    console.log("Day la day so fibonacci");
    }else{
    console.log("Day khong phai la day so fibonacci");}
}

