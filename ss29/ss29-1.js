let contact = [
    { name: " Nguyen van A ", id: 1, phone: " 0123456789 ", email: "NguyenVanA@gmail.com" },
    { name: " Nguyen van B ", id: 2, phone: " 0223456789 ", email: "NguyenVanB@gmail.com" },

];
let id;
let name;
let phone;
let index;
let email;
let choice = 0;
do {
    console.log("1. Thêm đối tượng Contact vào danh sách liên hệ.");
    console.log("2. Hiển thị danh sách danh bạ.");
    console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
    console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id.");
    console.log("5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id..");
    console.log("6. Thoát.");
    choice = prompt("Enter your choice");
    switch (choice) {
        case 1:
            id = prompt("Enter id");
            name = prompt("Enter name");
            phone = prompt("Enter phone");
            email = prompt("Enter email");
            newContact = { id: id, name: name, phone: phone, email: email };
            contact.push(newContact);
            break;
        case 2:
            console.log(contact);
            break;
        case 3:
            phone = prompt("Enter phone");
            index = contact.findIndex(x => x.phone == phone);
            if (index != -1) {
                console.log(contact[index]);
            }
            break;
        case 4:
            id = prompt("Enter id");
            index = contact.findIndex(x => x.id == id);
            if(index != -1){
                name = prompt("Enter name");
                phone = prompt("Enter phone");
                email = prompt("Enter email");
                contact[index].name = name;
                contact[index].phone = phone;
                contact[index].email = email;
            }
            break;
        case 5:
            id = prompt("Enter id");
            index = contact.findIndex(x => x.id == id);
            if (index != -1) {
                contact.splice(index, 1);
            }
            break;  
        case 6:
            break;      

    }


} while (choice != 6);