let arr= [];
let count=0;
let number = +prompt("Nhập số phần tử của mảng: ");
if(number==0){
    console.log("Mảng rỗng");
}else if(isNaN(number)||number %1 !==0){
    console.log("sai du lieu");
}
for(let i=0;i<number;i++){
    arr.push(+prompt("Nhập phần tử thứ "+(i+1)+" :"));
}
N();
function N(){
    for(let i =0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
        }
    }
    console.log(count);
}