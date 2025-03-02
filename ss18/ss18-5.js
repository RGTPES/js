let yearEx = Number(prompt("Moi ban nhap so nam kinh nghiem"));
if(yearEx<1){
    alert("Mới vào nghề");
}
else if(yearEx>=1 && yearEx<=3){
    alert("Nhân viên có kinh nghiệm");
}
else if(yearEx>=4 && yearEx<=6){
    alert("Chuyên viên");
}
else{
    alert("Quản lý");
}