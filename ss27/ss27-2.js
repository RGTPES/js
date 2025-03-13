let choice = 0;
let arr = [];
let arrD = [];
do {
    console.log("Nhập danh sách sinh viên.");
    console.log("Hiển thị danh sách sinh viên.");
    console.log("Tìm sinh viên theo tên.");
    console.log("Xóa sinh viên khỏi danh sách.");
    console.log("Thoát.");
    choice = +prompt("Nhập vào lựa chọn của bạn:");
    switch (choice) {
        case 1:
            let number = +prompt("Nhập số lượng sinh viên: ");
            for (let i = 0; i < number; i++) {
                arr.push(prompt("Nhập tên sinh viên thứ " + (i + 1) + " :"));
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let search = prompt("Moi ban nhap ten sinh vien can tim: ");
            let resurch = arr.filter((item, index) => item == search);
            resurch.length == 0 ? console.log("Khong tim thay ten sinh vien") : console.log(resurch);
            break;
        case 4:
            let deleteStudent = prompt("Moi ban nhap ten sinh vien can xoa: ");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == deleteStudent) {
                    arr.splice(i, 1);
                    console.log("Xoa thanh cong");
                    break;
                }}
        case 5:
            console.log("Thoát.");
            break;
            }
    } while (choice != 5);
