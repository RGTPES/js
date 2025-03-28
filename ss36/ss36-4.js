let body = document.querySelector('body');
let dark_mode_toggle = document.getElementsByClassName('dark-mode-toggle')[0];

dark_mode_toggle.onclick = function() {
    body.classList.toggle('dark-mode');
}
