let userName = prompt("Moi ban nhap ten dang nhap");
if(userName==="ADMIN"){
    let pass = prompt("Moi ban nhap mat khau");
    if(pass === "TheMaste"){
        alert("Welcome");
    }else if(pass === null){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }
}else if(userName === null){
    alert("Cancelled")
}else{
    alert("i Don't know you")
}