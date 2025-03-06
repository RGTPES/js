let arr=[];
let c =0;
let l =0;
for(let i=0;i<6;i++){
    arr.push(+prompt("Nhap so thu "+(i+1)));
    if(arr[i]%2==0){
        c+=arr[i];
    }else{
        l+=arr[i];
    }
}
console.log("Tong so chan: "+c);
console.log("Tong so le: "+l);
