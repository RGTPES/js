let products = [
    {
        id: 1,
        name: "mèn men",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "com lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    },
]
let cart = [];
let choice = 0;
let name, id, price, quantity, category, index;
do {
    console.log("1. Hiển thị các sản phẩm theo tên danh mục.");
    console.log("2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm");
    console.log("3.Sắp xếp các sản phẩm trong cửa hàng theo giá");
    console.log("4. Tinh tiong tien trong gio hang");
    console.log("5. Thoát");
    choice = +prompt("Enter your choice");
    switch (choice) {
        case 1:
            category = prompt("Enter category product");
            let productFilter = products.filter(x => x.category == category);
            if (productFilter.length > 0) {
                productFilter.forEach(product => console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}, Category: ${product.category}`));
            }

            break;
        case 2:
            id = +prompt("Enter id product");
            index = products.findIndex(x => x.id == id);
            if (index != -1) {
                quantity = prompt("Enter quantity");
                if (products[index].quantity >= quantity) {
                    products[index].quantity -= quantity;
                    let cartIndex = cart.findIndex(x => x.id == id);
                    if (cartIndex == -1) {
                        cart.push(
                            {
                                id: products[index].id,
                                name: products[index].name,
                                price: products[index].price,
                                category: products[index].category,
                                quantity: quantity
                            }
                        )

                    } else {
                        cart[cartIndex].quantity += quantity;
                    }
                } else {
                    console.log("Không đủ hàng");
                    break;
                }
            } else {
                console.log("Không tìm thấy sản phẩm");
            }
            break;
        case 3:
            do {
                console.log("1. Sắp xếp tăng dần");
                console.log("2. Sắp xếp giảm dần");
                console.log("3. Thoát");
                choice = +prompt("Enter your choice");
                switch (choice) {
                    case 1:
                        products.sort((a, b) => a.price - b.price);
                        console.log(products);
                        break;
                    case 2:
                        products.sort((a, b) => b.price - a.price);
                        console.log(products);
                        break;
                }
            } while (choice != 3);
            break;
        case 4:
            cart.reduce((total, product) => total + product.price * product.quantity, 0);
            console.log(cart);
            break;
        case 5:
            break;      
    }
} while (choice != 5);