function sum(){
    let a = [];
    let sumTotal = 0;
    let sumArray = 0;
    let n = +prompt("Nhap so phan tu cua mang: ");
    
    for (let i = 0; i < n; i++) {
        a.push(+prompt("Nhap phan tu thu " + (i + 1) + " :"));
    }
    sumArray = a.reduce((acc, item) => acc + item, 0);
    for(let i = 1; i <= a[a.length-1]; i++){
         sumTotal  += i;
    }
    let find = sumTotal - sumArray;
    console.log(find);
}
sum();
