const products =[
    {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35990000,
    image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
      id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32990000,
    image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',  
    },
    {
        id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28990000,
    image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
    description: 'Điện thoại Android mạnh mẽ voi but S-Pen va camera sieu zoom.',
    },
    {
       id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_172_2.png',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin len đen 30 giờ.', 
    },
    {
       id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
    description: 'Đồng ho thông minh cao cap với tinh nang do nhip tim va ho tro the thao.', 
    },
    {
      id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
    description: 'Loa Bluetooth chống nước với am bass mạnh mẽ và pin 20 gio.',  
    }
    ];
    let thead = document.getElementById('thead');  
    let tbody = document.getElementById('tbody');  
    let table = document.getElementById('table');
    let search = document.getElementById('search');
    
    products.forEach(product => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
            <img src="${product.image}" alt="${product.name}" width="100" height="100">
            <br>
            <div>${product.name}</div>
            <br>
            <div>${product.description}</div>
            <br>
            <div>${product.price}</div>
            <br>
            <button class="btn">Mua</button> 
        </td>
      `;
      tbody.appendChild(tr);
    });
    let searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        let query = search.value.toLowerCase();
        tbody.innerHTML = '';
        products.forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>
                        <img src="${product.image}" alt="${product.name}" width="100" height="100">
                        <br>
                        <div>${product.name}</div>
                        <br>
                        <div>${product.description}</div>
                        <br>
                        <div>${product.price}</div>
                        <br>
                        <button class="btn">Mua</button> 
                    </td>
                `;
                tbody.appendChild(tr);
            }
        });
    });
    
    
    
    
    
    