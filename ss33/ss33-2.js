let text = document.getElementById("Text"); 
let count = document.getElementById("count");
let btn = document.getElementById("btn");

function updateLength() {
    let len = text.value.length;
    count.innerText = `${len} kí tự`; 
}

function handleClick() { 
    updateLength();
}