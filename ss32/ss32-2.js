let btn = document.getElementById('btn');
let count = document.getElementById('count');
btn.addEventListener('click', function() {
    count.textContent = parseInt(count.textContent) + 1;
   
});
