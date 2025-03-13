let choice = 0;
let arr = [];
let r = 0;
let a;
let b;
do {
    console.log("Nhập danh sách số nguyên.");
    console.log("Tính trung bình các số.");
    console.log("Tìm số chẵn lớn nhất.");
    console.log("Tìm số lẻ nhỏ nhất.");
    console.log("Thoat");
    chocie = +prompt("Nhap lua chon cua ban:");
    choice= prompt("Nhap lua chon cua ban:");
    switch(choice){
        case 1:
            let number = +prompt("Nhap so luong so nguyen: ");
            for(let i = 0; i < number; i++){
                arr.push(parseInt(prompt("Nhap so nguyen thu " + (i+1) + " :")));
            }
            break;
        case 2:
            let sum = 0;
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            console.log("Trung binh cac so: "+sum/arr.length);
            break;
        case 3:
            let max = arr.filter((item, index) => item % 2 == 0);
           let maxNumber =  max.reduce((a,b) => a > b ? a : b);
            console.log("So chan lon nhat: "+maxNumber);
            break;  
        case 4:
            let min = arr.filter((item,index) => item % 2 != 0);
            let minNumber = min.reduce((a,b)=> a < b ? a : b) ;
            break;
        case 5:
            console.log("Thoat chuong trinh");
            break;    
    }
}while(choice != 5)