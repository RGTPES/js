let a  = prompt("nhap chu ");
let b = prompt("nhap chu can tim ");
for(let i =0;i<a.length;i++){
    if(a[i]===b){
        alert("Ton tai tu can tim kiem")
        break;

    }else if(i===a.length-1){
        alert("Khong ton tai tu can tim kiem")
    }
}