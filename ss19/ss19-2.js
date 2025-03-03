let letter = (prompt("moi ban nhap"));
if(letter.length===1){
    if(isNaN(letter)){
        alert(`${letter}  la chu cai`);
    }
}else{
        alert(`${letter} ko phai la chu cai`);
    }