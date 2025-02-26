let min = prompt("Nhap so thu nhat");
let max = prompt("Nhap so thu hai");
let ans = Math.floor(Math.random() * (parseInt(max) - parseInt(min))
) + parseInt(min);
alert(ans);
