let n = +prompt("Moi ban nhap");

let number = [];
let temp ;
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
for(let i =0;i<number.length;i++){
    for(let j =i;j<number.length;j++){
       if(number[j ]>number[j+1]){
           temp = number[j];
           number[j] = number[j+1];
              number[j+1] = temp;
        }
    }
}
console.log("so lon thu 2  la "+number[number.length-2]);   
}
