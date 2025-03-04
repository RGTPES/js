let a = prompt("Moi ban nhap so ");

for(let i =0;i< a.length;i++){
    if(a[i]===a[a.length - i - 1]){
        if(i===Math.floor(a.length / 2) - 1){
            alert("La so doi xung");
            break;
        }

        
    }else{
        alert("ko phai so doi xung")
        break;
    }
}
