let btn = document.getElementById('btn');
let container = document.getElementById('container');
btn.addEventListener('click', function() {
    container.style.backgroundColor = setRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  function setRandomColor() {
      document.getElementById('container').style.backgroundColor = getRandomColor();
    }
  

