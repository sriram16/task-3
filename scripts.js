let tasks = [];
let taskId = 0;

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();
    
    if (taskTitle && taskDescription) {
        tasks.push({ id: taskId++, title: taskTitle, description: taskDescription });
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskLi = document.createElement('li');
        taskLi.classList.add('task-item');
        taskLi.innerHTML = `
            <p class="task-title">${task.title}</p>
            <p class="task-description">${task.description}</p>
            <p class="task-delete"><button onclick="deleteTask(${task.id})">X</button></p>
        `;
        taskList.appendChild(taskLi);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
	