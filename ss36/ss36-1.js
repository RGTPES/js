

function addName(){
 let name = document.getElementById('name').value;   
 localStorage.setItem('name', name);
let container = document.getElementById('container');
let gotName = localStorage.getItem('name') || [];
if(gotName !==``){
container.innerHTML = "";
container.innerHTML += `
    <h1>👋Xin chào, ${name}</h1>
    <button onclick="reset()">Đổi Tên</button>
    `
}




}
function reset() {
    
    localStorage.removeItem('name');
    let container = document.getElementById('container');
    container.innerHTML = `
    <h2>Nhập tên của bạn</h2>
        <input type="text" id="name" placeholder="Nhập tên của bạn">
        <button onclick="addName()">Lưu</button>
    `;
}


let storedName = localStorage.getItem('name');
    let container = document.getElementById('container');

    if (storedName && storedName.trim() !== '') {
        container.innerHTML = `
            <h1>👋Xin chào, ${storedName}</h1>
            <button onclick="reset()">Đổi Tên</button>
        `;
    }

