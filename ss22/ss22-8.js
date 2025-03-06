let numberArray = [5, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let maxCount = 0;
let mostElement = numberArray[0];

for (let i = 0; i < numberArray.length; i++) {
    let count = 0;
    for (let j = 0; j < numberArray.length; j++) {
        if (numberArray[i] === numberArray[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostElement  = numberArray[i];
    } 
    else if (count === maxCount && numberArray[i] < mostElement ) {
        mostElement  = numberArray[i];
    }
}

console.log('phan tu xuat hien nhieu nhat la', mostElement );