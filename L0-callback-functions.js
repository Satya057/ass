// L0 - Understanding Callback Functions
// Problem Statement: Write a JavaScript program that demonstrates the use of a callback function 
// to execute tasks in sequence. Your program should:
// 1. Define a function taskOne() that logs "Task 1 completed".
// 2. Define a function taskTwo(callback) that logs "Task 2 completed" and then executes the callback function.
// 3. Call taskTwo(taskOne) to ensure taskOne runs only after taskTwo finishes.
// Expected Output:
// "Task 2 completed"  
// "Task 1 completed"

function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback();
}

taskTwo(taskOne); 