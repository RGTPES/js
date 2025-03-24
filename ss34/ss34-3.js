let email = document.getElementById("email");

let btn = document.getElementById("btn");
let web = localStorage.getItem('web') ? JSON.parse(localStorage.getItem('web')) : [];
function submitForm(a) {
    a.preventDefault();
    let password = document.getElementById("password").value;
    if(password ==="") {
        alert("Password cannot be empty");
        return;
    }
    
    let userIndex = web.findIndex((item) => item.email === email.value);
    if(userIndex !== -1){
        if(web[userIndex].password !== password){
            console.log("Mat khau nhap lai sai");
            return;
        }else{
            console.log("Dang nhap thanh cong");
            return;
        }
    }else{
        console.log("Email ko ton tai");
        return;
    }
}

btn.addEventListener("click", submitForm);
        




