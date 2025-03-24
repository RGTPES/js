let content = document.getElementById('content');
let date = document.getElementById('date');
let status = document.getElementById('status');
let userName = document.getElementById('userName');
let submit = document.querySelector('.submit');
let tbody = document.getElementById('tbody');
let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
let editIndex = -1;
console.log(submit);


function render() {
    tbody.innerHTML = '';
    todoList.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.content}</td>
            <td>${item.date}</td>
            <td>${item.status}</td>
            <td>${item.userName}</td>
            <td><button onclick="editTask(${index})">Edit</button></td>
            <td><button onclick="del(${index})">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function submitForm(e) {
    e.preventDefault();
    let obj = {
        content: content.value,
        date: date.value,
        status: status.value,
        userName: userName.value
    };
    
    if (editIndex === -1) {
        todoList.push(obj);
    } else {
        todoList[editIndex] = obj;
        editIndex = -1;
        resetForm();
    }

    localStorage.setItem('todoList', JSON.stringify(todoList));
    render();
}

function editTask(index) {
    let item = todoList[index];
    content.value = item.content;
    date.value = item.date;
    status.value = item.status;
    userName.value = item.userName;
    editIndex = index;
    submit.textContent = 'Edit';
}

function del(index) {
        todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        render();
    
}
function resetForm() {
    content.value = '';
    date.value = '';
    status.value = '';
    userName.value = '';
    editIndex = -1;
    submit.textContent = 'Submit';
}



submit.addEventListener('click', submitForm);
render();


