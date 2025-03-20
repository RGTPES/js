
let ol = document.getElementById("list");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
function add(){
   if(input.value  ==''){
    alert('Nhap mon hoc');
}
else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    op.appendChild(li);
}
}

