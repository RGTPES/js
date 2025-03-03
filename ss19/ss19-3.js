let choice = prompt(`1. VND->USD 
2. USD->VND`)
if(choice==1){
    let money = +prompt("moi ban nhap so tien");
    let trans = money / 23000;
    alert(`${trans} USD`)
}else if(choice ==2){
    let money = +prompt("moi ban nhap so tien");
    let trans = money * 23000;
    alert(`${trans} VND`)
}else{
    alert("sai dinh dang");
}
