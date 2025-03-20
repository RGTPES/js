let input = document.getElementById('input');
let list = document.getElementById('list');
function add(){
    if(input.value ===``){
        alert('Please enter a list');
        return;
    }
    list.innerHTML += `<li >${input.value}
        <span class="close" onclick="deleteItem(this)"><button class="btn-close">X</button></span>
    <hr></li> `;
    
    input.value = '';
}
function deleteItem(element) {
    element.parentElement.remove();
}
let style = document.createElement('style');
style.innerHTML=`
    .btn-close{
    background-color: red;
    color: white;    
}
    .btn-close:hover{
    background-color: black;
}
`;
document.head.appendChild(style);



