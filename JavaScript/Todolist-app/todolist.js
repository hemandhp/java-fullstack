// Get necessary elements from the DOM
const inputBox = document.getElementById('inputBox');
const todoList = document.getElementById('todolist');

// Function to add a new task
function addTask() {
    // Get the value from the input box and trim whitespace
    let taskText = inputBox.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert("Please enter a task before adding.");
        return; // Exit the function
    }

    // 1. Create the new list item (li)
    let listItem = document.createElement('li');
    listItem.className = 'task-item'; // Add a class for styling

    // 2. Create the span for the task text
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task-text';

    // 3. Create the delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#x2715;'; // X mark for delete
    deleteButton.className = 'delete-btn';

    // Add event listener to the delete button
    deleteButton.onclick = function() {
        // Remove the parent <li> element when clicked
        listItem.remove();
        saveTasks(); // Save tasks after deletion
    };

    // Add event listener for toggling the 'completed' class on click (optional: allows marking complete)
    taskSpan.onclick = function() {
        listItem.classList.toggle('completed');
        saveTasks(); // Save tasks after toggling completion
    };

    // 4. Append the span and button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // 5. Append the new list item to the main to-do list (ul)
    todoList.appendChild(listItem);

    // 6. Clear the input box and save the updated list
    inputBox.value = '';
    saveTasks();
}

// Optional: Allow adding a task by pressing the Enter key in the input box
inputBox.addEventListener('keypress', function(event) {
    // Check if the key pressed is 'Enter' (key code 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default action (e.g., form submission)
        addTask();
    }
});

// --- Local Storage Functionality (To save tasks between sessions) ---

// Function to save the current list of tasks to Local Storage
function saveTasks() {
    localStorage.setItem("tasks", todoList.innerHTML);
}

// Function to load tasks from Local Storage when the page loads
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        todoList.innerHTML = savedTasks;
        // Re-attach event listeners to loaded elements (Crucial for loaded tasks)
        reAttachEventListeners();
    }
}

// Function to re-attach event listeners after loading from storage
function reAttachEventListeners() {
    // Re-attach delete listeners
    todoList.querySelectorAll('.delete-btn').forEach(button => {
        button.onclick = function() {
            button.parentElement.remove();
            saveTasks();
        };
    });

    // Re-attach completion toggle listeners
    todoList.querySelectorAll('.task-text').forEach(span => {
        span.onclick = function() {
            span.parentElement.classList.toggle('completed');
            saveTasks();
        };
    });
}

// Load the saved tasks when the script first runs
loadTasks();