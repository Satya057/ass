document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Add new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            completeBtn.textContent = taskSpan.classList.contains('completed') ? 'Undo' : 'Complete';
            taskItem.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
            checkEmptyList();
        });

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(actionsDiv);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
        checkEmptyList();
    }

    // Check if list is empty
    function checkEmptyList() {
        if (taskList.children.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.className = 'empty-message';
            emptyMsg.textContent = 'No tasks added yet. Add some tasks above!';
            taskList.appendChild(emptyMsg);
        } else {
            const emptyMsg = document.querySelector('.empty-message');
            if (emptyMsg) emptyMsg.remove();
        }
    }

    // Event listeners
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // Initial check
    checkEmptyList();
});