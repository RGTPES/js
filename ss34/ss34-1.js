let email = document.getElementById("email");

let btn = document.getElementById("btn");
let web = localStorage.getItem('web') ? JSON.parse(localStorage.getItem('web')) : [];
function submitForm(a) {
    a.preventDefault();
    let password = document.getElementById("password").value
    let passwordConfirm = document.getElementById("passwordConfirm").value
    if(password ==="") {
        alert("Password cannot be empty");
        return}
    else if(password!==passwordConfirm){
        
        console.log("Mat khau nhap lai sai");
        return;

}

btn.addEventListener("click", submitForm);
let userIndex = web.findIndex((item) => item.email === email.value);
if(userIndex !== -1){
    console.log("Email da ton tai");
    return;
}else{
    console.log("Dang ky thanh cong");
    web.push({email: email.value, password: password});
    localStorage.setItem('web', JSON.stringify(web));
}
}

