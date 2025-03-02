let num = Number(prompt("Moi ban nhap so tu 0 - 9"));
if(num >= 0 && num < 10){
    switch(num){
        case 0  :
            alert("Không");
            break;
        case 1:
            alert("Một");
            break;
        case 2:
            alert("Hai");
            break; 
        case 3:
            alert("Ba");
            break;
        case 4:
            alert("Bốn");
            break;
        case 5:
            alert("Năm");
            break;
        case 6:
            alert("Sáu");
            break;
        case 7:
            alert("Bảy");
            break;
        case 8:
            alert("Tám");
            break; 
        case 9:
            alert("Chín");
            break;     
    }
    
}else{
        alert("Nhập sai yêu cầu ");
    }

