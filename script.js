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
    // addTask(tasks, taskName);
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

const addCompletedHeader = (completedList) => {
  const completedTitle = document.createElement("h3")
  completedTitle.textContent = "Completed"
  completedList.prepend(completedTitle)
}

const moveTask2 = (taskItem, todoList, completedList) => {
  todoList.removeChild(taskItem)
  if(!completedList.querySelector("h3")) {
    addCompletedHeader(completedList)
  }
  completedList.appendChild(taskItem)
}

const taskDone = (e) => {
  const taskItem = e.target.parentNode.parentNode;
  if (e.target.checked) {
    moveTask2(taskItem, taskList, completedList)
  } else {
    moveTask(taskItem, completedList, taskList).catch((error) => {
      console.log(error);
    });
  }
};


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



const filterComplete = () => {
  const taskList = [];
  let filterCompleted = false;

  return taskList.filter((task) => !filterCompleted || !task.completed);
};
