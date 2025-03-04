let n = +prompt("moi ban nhap so");

if(isNaN(n)||n<5){
    alert("ko dung du lieu")
}else {
    document.write(`cac so chia het cho 5 tu 1 den ${n} la : `)
    for(let i =1;i<=n;i++){
        if(i%5==0){
            document.write(`${i} `);
        }
    }
alert(a);
}