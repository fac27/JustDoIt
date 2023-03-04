// Add tasks to a list so that I can keep track of them
//do we want to create a simple aray or an array of object? eg.

const addTask = (array, item) => {
  const newArray = [...array, item];
  return newArray;
};
console.log(addTask([1,2,3], "four"))


const taskDone = () =>{
  const newTask = document.createElement("input")
  newTask.setAttribute("type","checkbox")
  newTask.value = "test"
  body.innerhtml = newTask
    if (checkbox.checked) {
      return true
    } else {
      return false
    }
}

//   Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  // check if checkmark is true/false
});

//   Delete things from the list if I don’t need to do them anymore
//   Link to a button with click event listener
element.addeventlistner('click', deleteItem());

const deleteItem = () => {

  const itemList = [];

  return index => {
    itemList.splice(index, 1);
    return itemList;
  }
};

//   Filter out completed to-dos from my list so that I can focus on what’s left to do
//   Link to a button with click event listener
element.addeventlistner('click', filterComplete());

const filterComplete = () => {

  const taskList = [];
  let filterCompleted = false;

  return taskList.filter(task => !filterCompleted || !task.completed);
};
