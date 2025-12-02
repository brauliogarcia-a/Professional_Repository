// Reference main elements in the page
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const toggleBtn= document.getElementById('toggle-btn');
const taskList= document.getElementById('task-list');

// Array of tasks
let tasks = [];

// Render task elements
function renderTasks(){
    taskList.innerHTML='';

    tasks.map(function(task, index){
        const li = document.createElement('li');

        //Checkbox
        const check = document.createElement('div');
        check.classList.add('checkbox');
        if (task.completed){
            check.classList.add('checked');
        }
        check.onclick = function(){
            toggleComplete(index);
        }

        // Task Text
        const span = document.createElement('span');
        span.textContent = task.text;
        span.classList.add('text');
        if(task.completed){
            span.classList.add('completed');
        }

        // Delete Button
        const del = document.createElement('span');
        del.textContent = "\u2716";
        del.classList.add('delete');
        del.onclick = function(){
            deleteTask(index);
        }

        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(del);
        taskList.appendChild(li);
    });

    // Show number of incomplete tasks
    const remainingDiv = document.getElementById('remaining-tasks');
    const count = countIncompleteTasks(0);
    remainingDiv.textContent = 'Tasks Left:' + count;

    // Add items to Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task with error handling
function addTask(){
    try{
        if(taskInput.value.trim() === '')
            throw 'Task canot be empty';
        
        tasks.push({
            text: taskInput.value.trim(),
            completed: false
        });
        
        taskInput.value ='';
        renderTasks();

    } catch (err) {
        alert(err);
    }
}

// Toggle Complete
function toggleComplete(i){
    tasks[i].completed = !tasks[i].completed;
    renderTasks();
}

// Delete specific task
function deleteTask(i){
    tasks.splice(i, 1);
    renderTasks();
}

// Hide or show list
toggleBtn.onclick = function(){
    if (taskList.style.display === 'none'){
        taskList.style.display = 'block';
        toggleBtn.textContent = 'Hide List';
    } else{
        taskList.style.display = 'none';
        toggleBtn.textContent = 'Show List';
    }
}

// Recursion
function countIncompleteTasks(i){
    if (i >= tasks.length){
        return 0;
    }

    const current = tasks[i].completed ? 0 : 1;
    return current + countIncompleteTasks(i + 1);
}

// Load tasks from localstorage
const saved = localStorage.getItem('tasks'); 
if (saved){
    tasks = JSON.parse(saved);
    renderTasks();
}


// Add task button
addBtn.addEventListener('click', addTask);