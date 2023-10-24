//Находим необходимые элементы DOM и записываем в переменные
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


//Создаем функцию
function createTask() {
    //Получаем значение, введенное в поле ввода
    const taskText = taskInput.value;
    //Создаем новый элемент списка с помощью метода (createElement)
    const newTask = document.createElement('li');
    //Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
    newTask.textContent = taskText;
    //Добавляем новую задачу в список с помощью метода (append)
    taskList.append(newTask);
    //Очищаем поле ввода после добавления задачи
    taskInput.value = '';
}

function checkTask(newTask) {
    //Проверяем, что кликнули на элемент списка (event.target)
    if (newTask.target.tagName === 'LI') {
    //Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)   
    newTask.target.classList.toggle('checked');
    }
}

addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);