const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const ToDos_Key = "todos"

let toDos = []
console.log(toDos)

function saveToDos() {
    localStorage.setItem(ToDos_Key, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    li.remove();

    toDos = toDos.filter((todo) => todo.id != parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id
    const span = document.createElement('span');
    const button = document.createElement('button');

    button.innerText = "❌";
    button.addEventListener('click', deleteToDo)

    li.appendChild(span);
    li.appendChild(button)
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function handleToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
}

toDoForm.addEventListener('submit', handleToDo)

function sayHello(item) {
    console.log('hq', item)
}

const savedToDos = localStorage.getItem(ToDos_Key)

if (savedToDos != null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo)
}




// const arr = [123, 124, 512, 1251, 553]

// function filter(item) {
//     return item > 500
// }
// let a = arr.filter(filter)
// console.log(a)