let menu = {
    food: [
        { name: "Thit ga", price: 1000, about: "thuc pham lam tu ga" },
        { name: "Thit bo", price: 2000, about: "thuc pham lam tu bo" }
    ],
    drink: [
        { name: "Coca", price: 1000, about: "nuoc ngot" },
        { name: "Pepsi", price: 2000, about: "nuoc ngot" }
    ]
};

let choice = 0;
let name, price, about, index, type;

do {
    console.log("1. Thêm món ăn vào danh mục.");
    console.log("2. Xóa món ăn theo tên khỏi danh mục.");
    console.log("3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).");
    console.log("4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.");
    console.log("5. Tìm kiếm món ăn theo tên trong toàn bộ menu.");
    console.log("6. Thoát");
    
    choice = parseInt(prompt("Enter your choice"));

    switch (choice) {
        case 1:
            type = prompt("Enter type (food/drink)");
            name = prompt("Enter name");
            price = parseInt(prompt("Enter price"));
            about = prompt("Enter about");
            let newFood = { name: name, price: price, about: about };
            if (type === "food") {
                menu.food.push(newFood);
            } else if (type === "drink") {
                menu.drink.push(newFood);
            }
            break;
            
        case 2:
            type = prompt("Enter type (food/drink)");
            name = prompt("Enter name");
            if (type === "food") {
                index = menu.food.findIndex(x => x.name === name);
                if (index !== -1) {
                    menu.food.splice(index, 1);
                }
            } else if (type === "drink") {
                index = menu.drink.findIndex(x => x.name === name);
                if (index !== -1) {
                    menu.drink.splice(index, 1);
                }
            }
            break;  
        case 3:
            type = prompt("Enter type (food/drink)");
            name = prompt("Enter name");
            if (type === "food") {
                index = menu.food.findIndex(x => x.name === name);
                if (index !== -1) {
                    price = parseInt(prompt("Enter price"));
                    about = prompt("Enter about");
                    menu.food[index].price = price;
                    menu.food[index].about = about;
                }
            } else if (type === "drink") {
                index = menu.drink.findIndex(x => x.name === name);
                if (index !== -1) {
                    price = parseInt(prompt("Enter price"));
                    about = prompt("Enter about");
                    menu.drink[index].price = price;
                    menu.drink[index].about = about;
                }
            }
            break;
        case 4:
            console.log(menu);
            break;
        case 5:
            name = prompt("Enter name");
            index = menu.food.findIndex(x => x.name === name);
            if (index !== -1) {
                console.log(menu.food[index]);
            } else {
                index = menu.drink.findIndex(x => x.name === name);
                if (index !== -1) {
                    console.log(menu.drink[index]);
                }
            }
            break;
        case 6:
            break;
    }

} while (choice !== 6);
