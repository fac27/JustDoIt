// Add tasks to a list so that I can keep track of them
//do we want to create a simple aray or an array of object? eg.
const taskInput = document.getElementById("input-task");
const form = document.getElementById("task-form");
const todoList = document.getElementById("todo-list");
const date = new Date().toDateString();
const taskName = taskInput.value;

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

//   Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  // check if checkmark is true/false
});

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
