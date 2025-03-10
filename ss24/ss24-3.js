let choice = 0;
let arr = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4.Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5.Đảo ngược mảng");
    console.log("6.Kiểm tra mảng có đối xứng không");
    console.log("7.Thoát chương trình");
    choice = +prompt("Nhập vào lựa chọn của bạn:"); 
    switch(choice){
        case 1:
            let arrLength = +prompt("Nhập vào số phần tử của mảng:");
            for(let i = 0; i < arrLength; i++){
                let element = +prompt(`Nhập vào phần tử thứ ${i+1}`);
                arr[i] = element;
            }
            break;
        case 2:
            for(let i = 0; i< arr.length; i++){
                console.log(arr[i]);
            }
            break;
        case 3:
            for(let i =0;i<arr.length;i++){
                let max = arr[0];
                if(max < arr[i]){
                    max = arr[i];
                }
            }
            console.log(arr.indexOf(max));
            break;  
        case 4:
            let sum =0;
        let NUM= [];
            for(let i =0;i<arr.length;i++){
                if(arr[i]>0){
                    NUM.push(arr[i]);
                }
            }
            for(let i =0;i<NUM.length;i++){
                sum+=NUM[i];
            }
            console.log("Tong cac so duong la: "+sum);
            console.log("Trung binh cong cac so duong la: "+sum/NUM.length);
                 break;
        case 5:  
        console.log(arr.reverse());  
            break;
        case 6:
            for(let i =0;i<arr.length/2;i++){
                if(arr[i]!==arr[arr.length-1-i]){
                    console.log("Mang ko doi xung");
            }else{
                console.log("Mang doi xung")
            }
            break;    
        }
    }
} while(choice !== 7);