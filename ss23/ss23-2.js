let number=[ 1 , 9 ,10 ,5 ,6]
let max = number[1]

for(let i =1;i<number.length;i++){
    if(max<number[i]){
        max=number[i]
         
    }
}
console.log('so lon nhat la',max,'o vi tri',number.indexOf(max));