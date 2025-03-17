let job = [
    {id:1 , name :"plant", about:"plant tree" , timeStart :"7", status: "done"},
    {id:2 , name :"water", about:"water tree" , timeStart :"8", status: "not done"},
];
let id;
let name;
let about;
let timeStart;
let status;
let choice = 0;
let index;
do{
    console.log("1. Thêm công việc mới.");
    console.log("2. Hiển thị tất cả các công việc.");
    console.log("3. Cập nhật trạng thái công việc theo id.");
    console.log("4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.");
    console.log("5. Sắp xếp các công việc theo trạng thái công việc.");
    console.log("6. Thoát.");
    choice = prompt("Enter your choice");
    switch(choice){
    case 1:
        id = prompt("Enter id");
        name = prompt("Enter name");
        about = prompt("Enter about");
        timeStart = prompt("Enter time start");
        status = prompt("Enter status");
        newJob = {id:id, name:name, about:about, timeStart:timeStart, status:status};
        job.push(newJob);
        break;
    case 2:
        console.log(job);
        break;
    case 3:
        id = prompt("Enter id");
        index = job.findIndex(x => x.id == id);
        if(index != -1){
            status = prompt("Enter status");
            job[index].status = status;
        }
        break;
    case 4:
        status = prompt("Enter status");
        let jobFilter = job.filter(x => x.status == status);
        console.log(jobFilter);
        break;
    case 5:
        job.sort((a,b) => a.status.localeCompare(b.status));
        console.log(job);
        break;
    case 6:
        break;
    }
}while(choice != 6);