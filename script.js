// Add tasks to a list so that I can keep track of them
//do we want to create a simple aray or an array of object? eg.
// const date = new Date().toDateString();

const taskList = document.querySelector("#todo-list");
const newTaskTemplate = document.querySelector("#newTaskTemplate");
const tasks = [];
//add task to an array

const addTask = (array, item) => {
  array.push(item);
  return array;
};

const addTaskToList = (task) => {
  const newTask = newTaskTemplate.content.cloneNode(true);
  newTask.querySelector("label").textContent = task;
  const taskItem = newTask.querySelector(".task");
  taskList.appendChild(newTask);
  taskList.addEventListener("click", addtasktocomplete);
  addTask(tasks, newTask);
};
const form = document.getElementById("task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskInput = document.querySelector("#input-task");
  const taskName = taskInput.value.trim();
  if (taskName !== "") {
    addTaskToList(taskName);
    taskInput.value = "";
  }
  document.forms[0].reset();
});

const taskDone = () => {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
};

const addtasktocomplete = (e) => {
  const completedList = document.querySelector("#done-list");
  const taskItem = e.target.parentNode;

  if (e.target.checked) {
    if (!completedList.querySelector("h3")) {
      const completedTitle = document.createElement("h3");
      completedTitle.textContent = "Completed";
      completedList.prepend(completedTitle);
    }

    const newTask = document.createElement("li");
    newTask.textContent = e.target.nextElementSibling.textContent;
    completedList.appendChild(newTask);
    taskItem.remove();
  }
};

//  Placeholder event listener to connect to button
//   Delete things from the list if I don’t need to do them anymore
const deleteItem = (event) => {
  if (event.target.matches("#delete-button")) {
    const taskItem = event.target.closest(".task");
    const index = [...taskList.children].indexOf(taskItem);
    taskItem.remove();
    tasks.splice(index, 1);
  }
};

taskList.addEventListener("click", deleteItem);

//   Filter out completed to-dos from my list so that I can focus on what’s left to do

// const filterComplete = () => {
//   const taskList = {
//     'tasks': [
//       //{completed: true},
//     ]
//   };
//   return taskList.tasks.filter(task => !task.completed);

// };

//   Filter out completed to-dos from my list so that I can focus on what’s left to do
//   Link to a button with click event listener
element.addeventlistner("click", filterComplete());

const filterComplete = () => {
  const taskList = [];
  let filterCompleted = false;

  return taskList.filter((task) => !filterCompleted || !task.completed);
};

//  Placeholder event listener to connect to button
button.addEventListener("click", filterComplete());
