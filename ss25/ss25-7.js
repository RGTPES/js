

up();
function up() {
    arr = [];
    let input = prompt("nhap phan tu ");
    let elements = input.split(' ');
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i].charAt(0).toUpperCase() + elements[i].slice(1).toLowerCase());
    }
    console.log(arr);
    alert(arr.join(' '));
}
