let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tua vít', category: 'Dụng cụ' },
];

let myUl = document.getElementById('myUl');
let btn = document.getElementById('btn');
let menu = document.getElementById('Menu');

btn.onclick = function () {
    let selectedCategory = menu.value;
    myUl.innerHTML = "";

    dish.forEach(function (item) {
        if (item.category === selectedCategory) {
            let li = document.createElement("li");
            li.textContent = item.name + " - " + item.category;
            myUl.appendChild(li);
        }
    });
};
