let arr = [];

let number = +prompt("Enter number of elements in array: ");
if(number ==0){
    console.log("Array is empty");
}else if(isNaN(number)){
    console.
    log("Invalid input");
}else{

    for (let i = 0; i < number; i++) {
        arr[i] = prompt("Enter number " + (i + 1) + ": ");
    }
    let max = arr[0];   

let a = arr.reduce((acc,curr) => (curr>acc?curr:acc),0);
console.log(max);

}    