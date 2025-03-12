let arr = [];
let number = prompt("Enter number of elements in array: ");
if(number ==0){
    console.log("Array is empty");
}else if(isNaN(number)){
    console.log("Invalid input");
}else{


for (let i = 0; i < number; i++) {
    arr[i] = prompt("Enter char " + (i + 1) + ": ");
}
let a = arr.filter((item, index) =>  item.length >= 5);
console.log(a);
}

    
