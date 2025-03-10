let choice = 0;
let arr = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm phần tử lớn nhất và nhỏ nhất");
    console.log("4.Tính tổng các phần tử trong mảng");
    console.log("5.Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6.Sắp xếp mảng tăng dần");
    console.log("7.Thoát");
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
            choice = +prompt("1.Tìm phần tử lớn nhất\n2.Tìm phần tử nhỏ nhất");
            switch(choice){
                case 1:
                    let max = arr[0];
                    for(let i = 1; i < arr.length; i++){
                        if(arr[i] > max){
                            max = arr[i];
                        }
                    }
                    console.log(`Phần tử lớn nhất là: ${max}`);
                    break;
                case 2:
                    let min = arr[0];
                    for(let i = 1; i < arr.length; i++){
                        if(arr[i] < min){
                            min = arr[i];
                        }
                    }
                    console.log(`Phần tử nhỏ nhất là: ${min}`);
                    break;
                default:
                    console.log("Vui lòng nhập lại");
                    break;
                }
        case 5:
            let n = +prompt("Nhập vào số cần tìm:");
            let count = 0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == n){
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ${n} là: ${count}`);
            break;
        case 4:
            let sum =0;
            for(let i =0;i<arr.length;i++){
            sum += arr[i];
            }
            console.log("Tong cua mang la: "+sum);
           break;
        default:
            console.log("Vui lòng nhập lại");
            break;
        case 6:
            for(let i =0;i<arr.length;i++){
                for(let j =0;j<arr.length;j++){
                    if(arr[i]<arr[j]){
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            for(let i =0;i<arr.length;i++){
                console.log(arr[i]);
            }
            break;
     }

} while(choice !== 7);