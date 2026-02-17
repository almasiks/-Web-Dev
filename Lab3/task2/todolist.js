const input = document.getElementById('todoinp');
const addBtn = document.getElementById('button-add');
const todoList = document.getElementById('todolist');

function addTask() {
    const taskValue = input.value.trim();


    if (taskValue === "") return;


    const li = document.createElement('li');
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.padding = "40px";
    li.style.border = "2px solid #eee";
    li.style.borderRadius ="6px";


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = "15px";

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "grey";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });


    const span = document.createElement('span');
    span.innerText = taskValue;
    span.style.flexGrow = "1";
    span.style.textAlign = "left";


    const delBtn = document.createElement('button');
    delBtn.innerHTML = "🗑️";
    delBtn.style.background = "none";
    delBtn.style.border = "none";
    delBtn.style.color = "red";
    delBtn.style.cursor = "pointer";


    delBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);


    todoList.appendChild(li);

    input.value = "";
}


addBtn.addEventListener('click', addTask);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});