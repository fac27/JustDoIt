function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

// FIRST TESTS//
//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  const result = addTask([], "item");
  equal(Array.isArray(result), true);
});

// when button is clicked, text from input gets added to an array. check array length.
test("Submitting a new task increases length of the new task list", () => {
  const result = addTask([], "item");
  equal(result.length, 1);
});

test("addTask() requires array and element arguments", () => {
  equal(addTask(), "Please pass an array");
  equal(addTask([]), "Please pass an element");
});

//SECOND TESTS//
// Check things off my list so that I can see what I’ve done
// check if checkmark is true/false
// check a nodelist for checkboxes that are checked
test("Checking an entry marks it as complete", () => {
  const result = taskDone(checkbox)
  equal(result, true)
});
