function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('todo-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}