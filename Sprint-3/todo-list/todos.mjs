/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", deadline: "", completed: false},
    { task: "Description of task 2", deadline: "", completed: true}
  ]

*/

// Append a new task to todos[]
export function addTask(todos, task, deadline = "", completed = false) {
  todos.push({ task, deadline, completed });
}

// Delete todos[taskIndex] if it exists
export function deleteTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos.splice(taskIndex, 1);
  }
}

// Toggle the "completed" property of todos[taskIndex] if the task exists.
export function toggleCompletedOnTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos[taskIndex].completed = !todos[taskIndex].completed;
  }
}

// Removes all completed ToDos from todos[]
export function deleteCompleted(todoList) {
  for (let i=todoList.length-1; i>=0; i--) {
    if (todoList[i].completed) {
      deleteTask(todoList, i);
    }
  }
}