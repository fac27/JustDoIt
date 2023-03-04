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