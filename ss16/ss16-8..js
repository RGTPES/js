let firstNum = prompt("Nhap so thu nhat");
let secondNum= prompt("Nhap so thu hai");
let thirdNum = prompt("Nhap so thu ba");
let temp =  parseInt(firstNum);
const number=[
 firstNum,
    secondNum,
    thirdNum,
]
   

for(let i =0;i<3;i++){
    if(temp < parseInt(number[i])){
        temp = parseInt(number[i]);
    }
}
alert(temp);
