let month = Number(prompt("Moi ban nhap thang"));
if(month>=1 && month <=12){
switch(month){
    case 1:
        alert("Tháng 1 có 31 ngày");
        break;
    case 2:
        alert("Tháng 2 có 28 ngày hoặc 29 ngày");
        break;
    case 3:
        alert("Tháng 3 có 31 ngày ");
        break;
    case 4:
        alert("Tháng 4 có 30 ngày ");
        break;
    case 5:
        alert("Tháng 5 có 31 ngày ");
        break;
    case 6:
        alert("Tháng 6 có 30 ngày ");
        break;
    case 7:
        alert("Tháng 7 có 31 ngày ");
        break;
    case 8:
        alert("Tháng 8 có 31 ngày ");
        break;
    case 9:
        alert("Tháng 9 có 30 ngày ");
        break;
    case 10:
        alert("Tháng 10 có 31 ngày");
        break;
    case 11:
        alert("Tháng 11 có 30 ngày ");
        break;
    case 12:
        alert("Tháng 12 có 31 ngày ");
        break;                                        
}
}else{
    alert("Thang ko hop le")
}