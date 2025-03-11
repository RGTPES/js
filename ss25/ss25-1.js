
let arr= [];
let number = +prompt("Nhập số phần tử của mảng: ");
if(number==0){
    console.log("Mảng rỗng");
}else if(isNaN(number)){
    console.log("Không phải là số");
}
for(let i=0;i<number;i++){
    arr.push(+prompt("Nhập phần tử thứ "+(i+1)+" :"));
}
minNumber();
function minNumber(){
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
     if(arr[i]<min){
         min = arr[i];
     }
    } 
    console.log(min);
    
 }