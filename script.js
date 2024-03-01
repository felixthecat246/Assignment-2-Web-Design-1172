document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task');
    const inputBox = document.getElementById('input-box');
    const prioritySelect = document.getElementById('priority');
    const listContainer = document.getElementById('list-container');

    addButton.addEventListener('click', function () {
        const taskTitle = inputBox.value.trim(); 
        const taskPriority = prioritySelect.value;
        
        if (taskTitle !== '') {
            addTask(taskTitle, taskPriority);
            inputBox.value = ''; 
        } else {
            alert('Please enter a task title.');
        }
    });

    function addTask(title, priority) {
        const li = document.createElement('li');
        li.textContent = title + ' - ' + priority;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        listContainer.appendChild(li);
    }
});

