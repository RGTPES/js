function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for(let i = 1;i<11;i++){
    const color = getRandomColor();
console.log("%cMau sac da duoc thay doi ", "color:" + color);
}

