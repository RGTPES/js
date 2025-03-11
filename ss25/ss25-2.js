let arr= [];
let number = +prompt("Nhập số phần tử của mảng: ");
if(number==0){
    console.log("Mảng rỗng");
}else if(isNaN(number)||number %1 !==0){
    console.log("sai du lieu");
}
for(let i=0;i<number;i++){
    arr.push(+prompt("Nhập phần tử thứ "+(i+1)+" :"));
}
total();
function total(){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
}