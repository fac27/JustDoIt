// Add tasks to a list so that I can keep track of them
//do we want to create a simple aray or an array of object? eg.
const taskInput = document.getElementById("input-task");
const form = document.getElementById("task-form");
const todoList = document.getElementById("todo-list");
const date = new Date().toDateString();
const taskName = taskInput.value;
const doneList = document.getElementById("done-list")

const addTask = (array, item) => {
  const newArray = [...array, item];
  return newArray;
};

//function to add task item from input and put into dom
const addtasktodom = (e) => {
  e.preventDefault();
  //create elements and set attributes
  const template = document.querySelector("#newTaskTemplate");
  const domFragment = template.content.cloneNode(true);
  domFragment.querySelector("label").textContent = taskInput.value;
  domFragment.querySelector("input[type=checkbox]").checked = false;
  domFragment.querySelector(`input[value='${taskName}']`)
  const checkbox = domFragment.querySelector("input[type=checkbox]");
  checkbox.addEventListener("click", addtasktocomplete)
  todoList.appendChild(domFragment)
  document.forms[0].reset();
};
form.addEventListener("submit", addtasktodom);

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

//   Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
//   Check if checkmark is true/false
});

//  Placeholder event listener to connect to button
button.addEventListener('click', deleteItem());

//   Filter out completed to-dos from my list so that I can focus on what’s left to do

// const filterComplete = () => {
//   const taskList = {
//     'tasks': [
//       //{completed: true},
//     ]
//   };
//   return taskList.tasks.filter(task => !task.completed);

// };
  
  
//   Delete things from the list if I don’t need to do them anymore
//   Link to a button with click event listener
element.addeventlistner("click", deleteItem());

const deleteItem = () => {
  const itemList = [];

  return (index) => {
    itemList.splice(index, 1);
    return itemList;
  };
};

//   Filter out completed to-dos from my list so that I can focus on what’s left to do
//   Link to a button with click event listener
element.addeventlistner("click", filterComplete());

const filterComplete = () => {
  const taskList = [];
  let filterCompleted = false;

  return taskList.filter((task) => !filterCompleted || !task.completed);
};

//  Placeholder event listener to connect to button
button.addEventListener('click', filterComplete());
