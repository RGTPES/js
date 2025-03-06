let arr = [];
let temp;
for(let i =0;i<7;i++){
    arr.push(+prompt("Nhap so thu "+(i+1)));
}
for(let i =0;i<arr.length-1;i++){
   for(let j = 0;j<arr.length-1;j++){
       if(arr[j]>arr[j+1]){
           temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp;
       }
   }
}
console.log(arr);