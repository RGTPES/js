let number =prompt("Nhap 10 so ").split(" ");
let flag = 0;

for( let i =0;i<number.length;i++){
    if(isNaN(number[i])){
        console.log("sai so");
        flag = -1;
        break;
    }
}
if(flag == 0){
    let temp = number[0];
    for(let i = 1; i < number.length; i++){
        if(temp<number[i]){
            temp = number[i];
        }
    }
    console.log(temp);
}