let arr = [];
let count = 0;
let number = +prompt("Enter number of elements in array: ");
if(number ==0){
    console.log("Array is empty");
}else if(isNaN(number)){
    console.log("Invalid input");
}else{


for (let i = 0; i < number; i++) {
    arr[i] = prompt("Enter number " + (i + 1) + ": ");
}
let a = arr.filter((item, index) => {
    count = 0 ;
    for(let i =0;i<=item;i++){
        if(item%i==0){
            count++;
        }
    }
    if (count==2){
        return item;
        
    }
} );
console.log(a);


}

    
