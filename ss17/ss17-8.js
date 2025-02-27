let date1 = new Date(prompt("2025-02-26"));
let date2 = new Date(prompt("2025-02-28"));
let lechngay = Math.abs((date1 - date2)/(1000*60*60*24));
alert(lechngay + "ngay");