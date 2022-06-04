var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/* REFACTORED CODE */
var createTaskHandler = function(event) {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item"; // creates new task item
    listItemEl.textContent = "This is a new task."; // styles new task item
    tasksToDoEl.appendChild(listItemEl); // appends element to task list
};

formEl.addEventListener("submit", createTaskHandler);
