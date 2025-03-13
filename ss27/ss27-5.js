function ad (arr,n){
let a = Math.ceil(arr.length/n);
let result = [];
let start = 0;
let end = 0;
for(let i =0;i<a;i++){
     start = i*n;
     end = start + n;
    result.push(arr.slice(start,end));
}
console.log(result);
}
let c = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
let n = +prompt("Nhap so phan tu cua mang: ");
for (let i = 0; i < n; i++) {
    a.push(+prompt("Nhap phan tu thu " + (i + 1) + " :"));
}
ad([1,2,3,4,5,6,7,8,9],3);