let flag = 0;

let number = [1 ,3 ,4,  15,16, 5 ];
for(let i =0;i<number.length;i++){
    if(number[i]>=10){
        console.log(number[i]);
        flag++;
    }

}if(flag==0){
    console.log('khong co so nao lon hon hoac bang 10');
}