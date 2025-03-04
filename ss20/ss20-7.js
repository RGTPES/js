let num = prompt("nhap so");
num = parseInt(num);

if (isNaN(num) || num < 1) {
    alert("ko hop le");
} else {
    let fnum = 1, snum = 1;

    if (num === 1) {
        document.write(fnum);
    } else {
        document.write(fnum + " " + snum + " ");

        for (let i = 2; i < num; i++) {
            let tnum = fnum + snum;
            document.write(tnum + " ");
            fnum = snum;
            snum = tnum;
        }
    }
}

