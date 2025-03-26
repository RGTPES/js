let list = document.getElementById("list");
function render() {
    list.innerHTML = "";
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.forEach((item, index) => {
        list.innerHTML += `
            <li>${item}<div><button onclick="del(${index})">Delete</button>
            <button onclick="edit(${index})">Edit</button></div></li>
            
        `;
    });
}
function addTask(a) {
    a.preventDefault();
    let task = document.getElementById("task");
    let taskValue = task.value;
    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.push(taskValue);
    
    localStorage.setItem("todoList", JSON.stringify(todoList));
    render();
    
    task.value = "";
}
function del(index) {
    if(confirm("Are you sure you want to delete")){
        let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        render();
    }
}

    function edit(index) {
        let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        let newTask = prompt("Edit task:", todoList[index]);
        if (newTask !== null && newTask.trim() !== "") {
            todoList[index] = newTask.trim();
            localStorage.setItem("todoList", JSON.stringify(todoList));
            render();
        }
    }
render();