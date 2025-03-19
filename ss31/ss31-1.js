
let element = document.getElementsByClassName('p');
// function hide() {
//     document.querySelector('.p').style.display = 'none';
// }

// function show() {
//     document.querySelector('.p').style.display = 'block';
// }
function hide() {
    element[0].style.display = 'none';
}

function show() {
    element[0].style.display = 'block';
}