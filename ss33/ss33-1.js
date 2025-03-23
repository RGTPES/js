let eye = document.getElementById('eye');
let input = document.getElementById('input');
eye.onclick = function(){
    console.log(`hi`)
input.type = input.type === 'password' ? 'text' : 'password';
}