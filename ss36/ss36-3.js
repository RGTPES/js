let container = document.getElementById('container');

let savedColor = localStorage.getItem('color');
if (savedColor==localStorage.getItem('color')) {
    container.style.backgroundColor = savedColor;
}

function change(color) {
    localStorage.setItem('color', color);
    container.style.backgroundColor = color;
}
