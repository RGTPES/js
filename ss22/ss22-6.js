let num = [];

let count =0;
for(let i = 0; i < 5; i++){
    num.push(+prompt("Nhap so thu " + (i+1)));

}
let find = +prompt("Nhap so can tim");
for(let i = 0; i < num.length; i++){
    if(find == num[i]){
        count++;
    }
}
console.log("So lan xuat hien cua so "+find+" la: "+count);