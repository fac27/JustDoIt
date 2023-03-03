// Add tasks to a list so that I can keep track of them

//do we want to create a simple aray or an array of object? eg. 

test("Submitting a new task adds it to the list", () => {
  // when button is clicked, text from input gets added to an array. check array length. 
const result = addTask([],"item")
  equal(Array.isArray(result), true);
});

//   Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  // check if checkmark is true/false
});

//   Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
  // test goes here
});

//   Filter out completed to-dos from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
  // test goes here
});
