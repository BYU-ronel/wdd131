// Select DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    addTask(taskInput.value); // Add the task
    taskInput.value = ''; // Clear input field
});

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        displayTask(task);
    });
}

// Function to add a task
function addTask(task) {
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTask(task);
    }
}

// Function to display a task in the task list
function displayTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        removeTask(task, li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
}

// Function to remove a task
function removeTask(task, li) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task); // Filter out the removed task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
    taskList.removeChild(li); // Remove the task from the UI
}