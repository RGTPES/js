let h = Number(prompt("Moi ban nhap so gio"));
let m = Number(prompt("Moi ban nhap so phut"));
let s = Number(prompt("Moi ban nhap so giay"));
if(h > 12 && h <=24 && m >=0 && m<=60 && s >=0 && s<=60 ){
    h = h - 12;
    alert(`${h}:${m}:${s} PM`);
}else if(h>=1 && h <= 12  && m >=0 && m<=60 && s >=0 && s<=60 || h === 0  && m >=0 && m<=60 && s >=0 && s<=60){
    alert(`${h}:${m}:${s} AM`);
}else{
    alert("gio ko hop le");
}