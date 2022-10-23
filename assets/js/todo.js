const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let arrTodos = [];
const TODOLIST_KEY = "todo-list";

function saveTodos() {
    localStorage.setItem(TODOLIST_KEY , JSON.stringify(arrTodos)); 
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    console.log(li);
    li.remove();
    arrTodos = arrTodos.filter(item => item.id !== parseInt(li.id));
    saveTodos();

}

function paintingTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}

function todoListValue(event) {
    event.preventDefault();
    const todoValue = todoInput.value;
    todoInput.value = "";
    const todoObj = {id: Date.now(), text: todoValue};
    arrTodos.push(todoObj);
    paintingTodo(todoObj);
    saveTodos();
}

  todoForm.addEventListener("submit", todoListValue);

  const savedTodos = localStorage.getItem(TODOLIST_KEY);

if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    arrTodos = parsedTodos;
    parsedTodos.forEach(item => { paintingTodo(item) });
}