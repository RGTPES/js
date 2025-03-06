let arr = prompt("Nhap 5 so").split("");
let temp = 0;
for(let i =0;i<arr.length;i++){
    if(isNaN(arr[i])){
        console.log("sai so");
        temp = -1;
        break;
    }
}
if(temp == 0){
    let arrreverse = arr.reverse();
console.log(arrreverse);
}



