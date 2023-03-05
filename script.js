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

//  Placeholder event listener to connect to button
button.addEventListener('click', deleteItem());

//   Filter out completed to-dos from my list so that I can focus on what’s left to do

const filterComplete = () => {
  const taskList = {
    'tasks': [
      //{completed: true},
    ]
  };
  
  return taskList.tasks.filter(task => !task.completed);
  
};

//  Placeholder event listener to connect to button
button.addEventListener('click', filterComplete());
