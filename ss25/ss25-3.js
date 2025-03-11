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
even();

function even(){
    let evenArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenArr.push(arr[i]);
        }
    }
    console.log(evenArr);
}