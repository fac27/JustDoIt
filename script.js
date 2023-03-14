// Add tasks to a list so that I can keep track of them
const taskList = document.querySelector("#todo-list");
const completedList = document.querySelector("#done-list");
const form = document.getElementById("task-form");
const tasks = [];

const addTask = (array, item) => {
  const task = { name: item, completed: false };
  array.push(task);
  saveTasksToLocalStorage(array);
  return array;
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createTaskElement = (taskName) => {
  const newTaskTemplate = document.querySelector("#newTaskTemplate");
  const newTask = newTaskTemplate.content.cloneNode(true);
  newTask.querySelector("label").textContent = taskName;
  const taskItem = newTask.querySelector(".task");
  // taskList.addEventListener("click", addtasktocomplete);
  const checkbox = newTask.querySelector(".todo-item");
  checkbox.addEventListener("change", taskDone);
  return newTask;
};

const addTasksToList = (tasks) => {
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
};

const submitTask = (event) => {
  event.preventDefault();
  const taskInput = document.querySelector("#input-task");
  const taskName = taskInput.value.trim();
  if (taskName !== "") {
    addTask(tasks, taskName);
    addTasksToList([taskName]);
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

const moveTask = (taskItem, todoList, doneList) => {
  todoList.removeChild(taskItem);
  doneList.appendChild(taskItem);

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

const taskDone = (e) => {
  const taskItem = e.target.parentNode.parentNode;
  if (e.target.checked) {
    moveTask(taskItem, taskList, completedList);
                if (!completedList.querySelector("h3")) {
          const completedTitle = document.createElement("h3");
          completedTitle.textContent = "Completed";
          completedList.prepend(completedTitle);
        }
  } else {
    moveTask(taskItem, completedList, taskList).catch((error) => {
      console.log(error);
    });
  }
};

// const addtasktocomplete = (e) => {
//   const completedList = document.querySelector("#done-list");
//   const taskItem = e.target.parentNode;

//   if (e.target.checked) {
//     if (!completedList.querySelector("h3")) {
//       const completedTitle = document.createElement("h3");
//       completedTitle.textContent = "Completed";
//       completedList.prepend(completedTitle);
//     }

//     const newTask = document.createElement("li");
//     newTask.textContent = e.target.nextElementSibling.textContent;
//     completedList.appendChild(newTask);
//     taskItem.remove();
//   }
// };

//   Delete things from the list if I don’t need to do them anymore
const deleteItem = (event) => {
  if (event.target.matches("#delete-button")) {
    const taskItem = event.target.closest(".task");
    const todoIndex = [...taskList.children].indexOf(taskItem);
    taskItem.remove();
    tasks.splice(todoIndex, 1);
    const doneIndex = [...completedList.children].indexOf(taskItem);
    tasks.splice(doneIndex, 1);
  }
};
taskList.addEventListener("click", deleteItem);
completedList.addEventListener("click", deleteItem);

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
// element.addeventlistner("click", filterComplete());

const filterComplete = () => {
  const taskList = [];
  let filterCompleted = false;

  return taskList.filter((task) => !filterCompleted || !task.completed);
};

//  Placeholder event listener to connect to button
// button.addEventListener("click", filterComplete());

//GRAVEYARD//

// const addTaskToList = (task) => {
//   const newTaskTemplate = document.querySelector("#newTaskTemplate");
//   const newTask = newTaskTemplate.content.cloneNode(true);
//   newTask.querySelector("label").textContent = task;
//   const taskItem = newTask.querySelector(".task");
//   taskList.appendChild(newTask);
//   taskList.addEventListener("click", addtasktocomplete);
//   // addTask(tasks, newTask);
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const taskInput = document.querySelector("#input-task");
//   const taskName = taskInput.value.trim();
//   if (taskName !== "") {
//     addTask(tasks,taskName)
//     addTaskToList(taskName);
//     taskInput.value = "";
//   }
//   document.forms[0].reset();
// });

//  const submitTask = (event) => {
//   event.preventDefault();
//   const taskInput = document.querySelector("#input-task");
//   const taskName = taskInput.value.trim();
//   if (taskName !== "") {
//     tasks.push(taskName);
//     addTasksToList([taskName]);
//     taskInput.value = "";
//   }
//   document.forms[0].reset();
// };
// const taskDone = (e) => {
//   const completedList = document.querySelector("#done-list");
//   const taskItem = e.target.parentNode;
//   if (e.target.checked) {
//     completedList.appendChild(newTask);
//     if (!completedList.querySelector("h3")) {
//       const completedTitle = document.createElement("h3");
//       completedTitle.textContent = "Completed";
//       completedList.prepend(completedTitle);
//     }
//   } else {
//     taskList.appendChild(newTask);
//   }
// };
