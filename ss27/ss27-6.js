function array (arr) {
    let distance = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != distance) {
            return false;
        }
    }
    return true;
}
let a = [];
let n = +prompt("Nhap so phan tu cua mang: ");
for (let i = 0; i < n; i++) {
    a.push(+prompt("Nhap phan tu thu " + (i + 1) + " :"));
}
console.log(array(a));