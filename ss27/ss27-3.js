let choice = 0;
let arr = [];
let r = 0;
let a;
let b;
do {
    console.log("Tính diện tích hình tròn.");
    console.log("Tính chu vi hình tròn.");
    console.log("Tính diện tích hình chữ nhật.");
    console.log("Tính chu vi hình chữ nhật.");
    console.log("Thoat");
    chocie = +prompt("Nhap lua chon cua ban:");
    switch (choice) {
        case 1:
            r = +prompt("Nhap ban kinh hinh tron:");
            console.log("Dien tich hinh tron: " + (r * r * 3.14));
            break;
        case 2:
            r = +prompt("Nhap ban kinh hinh tron:");
            console.log("Chu vi hinh tron: " + (2 * r * 3.14));
            break;
        case 3:
            a = +prompt("Nhap chieu dai hinh chu nhat:");
            b = +prompt("Nhap chieu rong hinh chu nhat:");
            console.log("Dien tich hinh chu nhat: " + (a * b));
            break;
        case 4:
            a = +prompt("Nhap chieu dai hinh chu nhat:");
            b = +prompt("Nhap chieu rong hinh chu nhat:");
            console.log("Chu vi hinh chu nhat: " + (a + b) * 2);
            break;
        case 5:
            console.log("Thoat chuong trinh");
            break;


    }
} while (choice != 5)