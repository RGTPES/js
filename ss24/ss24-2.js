let choice = 0;
let arr = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm các phần tử chẵn và lẻ");
    console.log("4.Tính trung bình cộng của mảng");
    console.log("5.Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
            let even = [];
            let odd = [];
            for(let i =0;i<arr.length;i++){
            if(arr[i]%2==0){
                even.push(arr[i]);
            }else{
                odd.push(arr[i]);
            }
            for(let i =0;i<arrLength.length;i++){
                console.log(even[i]);
            }
            for(let i =0;i<arrLength.length;i++){
                console.log(odd[i]);
            }
            break;
        }
        case 4:
            let avg=0;
            for(let i =0;i<arr.length;i++){
                avg+=arr[i];
            }
            avg/=arr.length;
            console.log("Trung binh cong cua mang la: "+avg);
            break;
        case 5:
            let index = +prompt("Nhap vao vi tri can xoa");
            arr.splice(index-1,1);
            break;
        case 6:
            for(let i =0;i<arr.length;i++){
                for(let j = 0 ; j<arr.length;j++){
                    if(arr[j]>arr[j+1]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            console.log("Phan tu lon thu 2 la: " + arr[arr.length-2]);
            break;
        }
        
        
} while(choice !== 7);