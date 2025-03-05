let num = Number(prompt("Moi ban nhap so"));
let count = 0;
let a = 2;                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
while (count < num) {
    let flag = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            flag++;
        }
    }
    if (flag === 2) {
        document.write(a + " ");
        count++;
        
    }
    a++;
}