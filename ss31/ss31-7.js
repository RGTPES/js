let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];

let ul = document.getElementById("myUL");
function renderList() {
    ul.innerHTML = "";

    todoList.forEach(function (item, index) {
        let li = document.createElement("li");
        li.textContent = item.task;
        
        if (item.completed) {
            li.classList.add("checked");
        }


        li.addEventListener("click", function () {
            todoList[index].completed = !todoList[index].completed; 
            renderList(); 
        });

        ul.appendChild(li);
    });
}
renderList();
