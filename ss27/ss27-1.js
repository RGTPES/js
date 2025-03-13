let choice = 0;
let arr= [];
do{
    console.log("Cong hai so");
    console.log("Tru hai so");
    console.log("Nhan hai so");
    console.log("Chia hai so");
    console.log("Thoat");
    choice = +prompt("Nhap lua chon cua ban:");
    switch(choice){
        case 1:
            let a = +prompt("Nhap so thu nhat:");
            let b = +prompt("Nhap so thu hai:");
            console.log("Tong hai so: "+(a+b));
            break;
        case 2:
            let c = +prompt("Nhap so thu nhat:");
            let d = +prompt("Nhap so thu hai:");
            console.log("Hieu hai so: "+(c-d));
            break;
        case 3:
            let e = +prompt("Nhap so thu nhat:");
            let f = +prompt("Nhap so thu hai:");
            console.log("Tich hai so: "+(e*f));
            break;
        case 4:
            let g = +prompt("Nhap so thu nhat:");
            let h = +prompt("Nhap so thu hai:");
            console.log("Thuong hai so: "+(g/h));
            break;
        case 5:
            console.log("Thoat chuong trinh");
            break;
        default:
            console.log("Vui long nhap lai");
    }
     
}while(choice != 5);


