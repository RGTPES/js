let number = +prompt("Nhập số:");
let count = 0;
if(isNaN(number)){
    console.log("Không phải là số");
}else{
    PrimeNumber();
}


function PrimeNumber(){
    for(let i=0;i<=number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count == 2){
        console.log("Là số nguyên tố");
    }else{
        console.log("Không phải là số nguyen tố");
    }
    
}