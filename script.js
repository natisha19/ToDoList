// references to DOM elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// adding a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });

    const textNode = document.createElement('span');
    textNode.textContent = taskText;

    // buttons for delete and reorder
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'; // Delete icon
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener('click', function () {
        listItem.remove();
    });

    const moveUpBtn = document.createElement('button');
    const upIcon = document.createElement('img');
    upIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/up-squared.png'; // Move up icon
    moveUpBtn.className = 'move-up';
    moveUpBtn.appendChild(upIcon);
    moveUpBtn.addEventListener('click', function () {
        const prev = listItem.previousElementSibling;
        if (prev) {
            taskList.insertBefore(listItem, prev);
        }
    });

    const moveDownBtn = document.createElement('button');
    const downIcon = document.createElement('img');
    downIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/down-squared.png'; // Move down icon
    moveDownBtn.className = 'move-down';
    moveDownBtn.appendChild(downIcon);
    moveDownBtn.addEventListener('click', function () {
        const next = listItem.nextElementSibling;
        if (next) {
            taskList.insertBefore(next, listItem);
        }
    });

    // button group
    buttonGroup.appendChild(moveUpBtn);
    buttonGroup.appendChild(moveDownBtn);
    buttonGroup.appendChild(deleteBtn);

   
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    listItem.appendChild(buttonGroup);

    //list item to the task list
    taskList.appendChild(listItem);

    // reset
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

// pressing Enter to add a task
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
