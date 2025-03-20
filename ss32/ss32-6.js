let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let size = 20;
let text = document.getElementById('text');
plus.addEventListener('click', function () {
    size ++;
    text.style.fontSize = size + 'px';
});
minus.addEventListener('click', function () {
    size --;
    text.style.fontSize = size + 'px';
});