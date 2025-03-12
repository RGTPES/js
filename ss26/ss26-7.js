let arr = [];

let number = +prompt("Enter number of elements in array: ");
if (number == 0) {
    console.log("Array is empty");
} else if (isNaN(number)) {
    console.log("Invalid input");
} else {
    for (let i = 0; i < number; i++) {
        arr[i] = +prompt("Enter number " + (i + 1) + ": "); 
    }

    function Even(element) {
        if (element % 2 == 0) {
            return element;
        
        }
    }

    let a = arr.map((item, index) => {
        item = item ** 2;
        return Even(item); 
    });
    console.log(a);

    
}
