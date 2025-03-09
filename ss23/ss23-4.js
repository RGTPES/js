let n = prompt("Moi ban nhap");
if(n==0){
    console.log("mang ko co phan tu");
}else{


let number = [];
for(let i =0;i<n;i++){
    number.push(+prompt("Moi ban nhap phan tu thu "+(i+1)));
}
for(let i =0;i <number.length;i++){
    if(number[i]%1==0){
        console.log(number[i]);
    }
}

}