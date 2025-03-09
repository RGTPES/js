let n = Number(prompt("Moi ban nhap"));
let count = 0;
let number = [];
if(n ==0){
    console.log("mang ko co phan tu");
}else if(n<0){
    console.log("khong hop le");
}else{

for(let i =0;i<n;i++){
    number.push(+prompt("Moi ban nhap phan tu thu "+(i+1)));
}
for(let i =0;i<number.length;i++){
    if((number[i]) <0&& number[i]%1==0){
        count++;
    }
}  
console.log("Co "+count+" so am trong mang");
} 