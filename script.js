// Add tasks to a list so that I can keep track of them
const taskList = document.querySelector("#todo-list");
const completedList = document.querySelector("#done-list");
const form = document.getElementById("task-form");
const tasks = [];

//create an array of objects
const addTask = (array, item) => {
  const task = { name: item, completed: false };
  array.push(task);
  return array;
};

// const saveTasksToLocalStorage = (tasks) => {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

//create element from html template
const createTaskElement = (task) => {
  const newTaskTemplate = document.querySelector("#newTaskTemplate");
  const newTask = newTaskTemplate.content.cloneNode(true);
  newTask.querySelector("label").textContent = task.name;
  const taskItem = newTask.querySelector(".task");
  const checkbox = newTask.querySelector(".todo-item");
  checkbox.addEventListener("change", taskDone);
  taskList.addEventListener("click", deleteItem);
  completedList.addEventListener("click", deleteItem);
  return newTask;
};

//with each task created, add it to the list
const addTasksToList = (tasks) => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
};
//on submission, get the values from the input and execute the functions above
const submitTask = (event) => {
  event.preventDefault();
  const taskInput = document.querySelector("#input-task");
  const taskName = taskInput.value.trim();
  addTask(tasks, taskName);
  if (taskName !== "") {
    addTasksToList(tasks);
    taskInput.value = "";
  }
  if (!taskList.querySelector("h3")) {
    const tasksTitle = document.createElement("h3");
    tasksTitle.textContent = "To Do";
    taskList.prepend(tasksTitle);
  }
  document.forms[0].reset();
};

form.addEventListener("submit", submitTask);

//moves tasks from one list to the other based on if the task is complete - probably best if we move 
// locate storage function to it's independent function
const moveTask = (taskItem, todoList, doneList) => {
  todoList.removeChild(taskItem);
  doneList.appendChild(taskItem);
};

const saveItWhenChecked = () => {
  const taskName = updatedTaskItem.querySelector("label").textContent;
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const updatedTasks = tasks.map((task) => {
    if (task.name === taskName) {
      task.completed = true;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  return taskItem;
};

//create header for completed tasks if there isn't one
const addCompletedHeader = (completedList) => {
  const completedTitle = document.createElement("h3");
  completedTitle.textContent = "Completed";
  completedList.prepend(completedTitle);
};
//move the tasks back and forth
const moveTask2 = (taskItem, todoList, completedList) => {
  todoList.removeChild(taskItem);
  if (!completedList.querySelector("h3")) {
    addCompletedHeader(completedList);
  }
  completedList.appendChild(taskItem);
};
//if it's checked move these tasks around with the functions above
const taskDone = (e) => {
  const taskItem = e.target.parentNode.parentNode;
  if (e.target.checked) {
    moveTask2(taskItem, taskList, completedList);
  } else {
    moveTask(taskItem, completedList, taskList);
  }
};

//   Delete things from the list if I don’t need to do them anymore
const deleteItem = (event) => {
  if (event.target.matches("#delete-button")) {
    const taskItem = event.target.closest(".task");
    const Index = tasks.findIndex(
      (task) => task.name === taskItem.querySelector("label").textContent
    );
    tasks.splice(Index, 1);
    taskItem.remove();
  }
};
// taskList.addEventListener("click", deleteItem);
// completedList.addEventListener("click", deleteItem);

// //   Filter out completed to-dos from my list so that I can focus on what’s left to do

// const filterComplete = () => {
//   const taskList = [];
//   let filterCompleted = false;

//   return taskList.filter((task) => !filterCompleted || !task.completed);
// };
