// Store everything imported from './todos.mjs' module as properties of an object named Todos 
import * as Todos from "./todos.mjs";

// To store the todo tasks
const todos = [];

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  document.getElementById("delete-completed-btn").addEventListener("click", deleteCompletedTodo);
  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);

  // Populate sample data
  Todos.addTask(todos, "Wash the dishes", "", false); 
  Todos.addTask(todos, "Do the shopping", "", true);

  render();
});


// A callback that deletes completed tasks from the todo list.
function deleteCompletedTodo() {
  Todos.deleteCompleted(todos);
  render();
}

// A callback that reads the task description from an input field and 
// append a new task to the todo list.
function addNewTodo() {
  const taskInput = document.getElementById("new-task-input");
  const task = taskInput.value.trim();
  const taskDeadline = document.getElementById("new-task-deadline");
  const deadline = taskDeadline.value.trim();
  if (task) {
    Todos.addTask(todos, task, deadline, false);
    render();
  }

  taskInput.value = "";
  taskDeadline.value = "";
}

// Note:
// - Store the reference to the <ul> element with id "todo-list" here
//   to avoid querying the DOM repeatedly inside render().
// - This variable is declared here to be close to the only function that uses it.
const todoListEl = document.getElementById("todo-list");

// Render the whole todo list
function render() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}


// Note:
// - First child of #todo-item-template is a <li> element.
//   We will create each ToDo list item as a clone of this node.
// - This variable is declared here to be close to the only function that uses it.
const todoListItemTemplate = 
  document.getElementById("todo-item-template").content.firstElementChild;

// Create a <li> element for the given todo task
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".description").textContent = todo.task;
  if (todo.completed) {
    li.classList.add("completed");
  }

  if (!todo.completed && todo.deadline!="") {
    const deadline = new Date(todo.deadline);  // when the time zone offset is absent, date-only forms are interpreted as a UTC time
    const now = new Date();
    const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    const diff = Math.ceil((today.getTime()-deadline.getTime())/1000/60/60/24);
    if (diff<0) {
      li.querySelector(".deadline").textContent = "D"+diff;
    }
    else if (diff==0) {
      li.querySelector(".deadline").textContent = "D-day";
      li.classList.add("dueday");
    }
    else if (diff>0) {
      li.querySelector(".deadline").textContent = "D+"+diff;
      li.classList.add("overdue");
    }
    else {
      li.querySelector(".deadline").textContent = todo.deadline;
    }
  }
  else {
    li.querySelector(".deadline").textContent = todo.deadline;
  }

  li.querySelector('.complete-btn').addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    render();
  });
    
  li.querySelector('.delete-btn').addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    render();
  });

  return li;
}