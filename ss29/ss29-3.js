let menu = [
      food = [
    { name : "Thit ga",price : 1000,about:"thuc pham lam tu ga"},
    { name : "Thit bo",price : 2000,about:"thuc pham lam tu bo"},
    ],
     drink = [
    { name : "Coca",price : 1000,about:"nuoc ngot"},
    { name : "Pepsi",price : 2000,about:"nuoc ngot"},
    ]
];
let choice = 0;
let name;
let price;
let about;
let index;
let type;
do{
    console.log("1. Thêm món ăn vào danh mục.");
    console.log("2. Xóa món ăn theo tên khỏi danh mục.");
    console.log("3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).");
    console.log("4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.");
    console.log("5. Tìm kiếm món ăn theo tên trong toàn bộ menu.");
    console.log("6. Thoát");
    choice = prompt("Enter your choice");
    switch(choice){
        case 1:
             type = prompt("Enter type");
            name = prompt("Enter name");
            price = prompt("Enter price");
            about = prompt("Enter about");
            newFood = {name: name, price: price, about: about};
            if(type == "food"){
                food.push(newFood);
            }else if(type == "drink"){
                drink.push(newFood);
            }
            break;
        case 2:
            type = prompt("Enter type");
            name = prompt("Enter name");
            if(type == "food"){
                index = food.findIndex(x => x.name == name);
                if(index != -1){
                    food.splice(index, 1);
                }
            }else if(type == "drink"){
                index = drink.findIndex(x => x.name == name);
                if(index != -1){
                    drink.splice(index, 1);
                }
            }
            break;
        case 3:
            type = prompt("Enter type");
            name = prompt("Enter name");
            if(type == "food"){
                index = food.findIndex(x => x.name == name);
                if(index != -1){
                    price = prompt("Enter price");
                    about = prompt("Enter about");
                    food[index].price = price;
                    food[index].about = about;
                }
            }else if(type == "drink"){
                index = drink.findIndex(x => x.name == name);
                if(index != -1){
                    price = prompt("Enter price");
                    about = prompt("Enter about");
                    drink[index].price = price;
                    drink[index].about = about;
                }
            }
            break;
        case 4:
            console.log(menu);
            break;
        case 5:
            name = prompt("Enter name");
            index = food.findIndex(x => x.name == name);
            if(index != -1){
                console.log(food[index]);
            }else{
                index = drink.findIndex(x => x.name == name);
                if(index != -1){
                    console.log(drink[index]);
                }
            }
            break;
        case 6:
            break;
    }

}while(choice != 6)