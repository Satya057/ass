// Demonstrating callback functions

function taskOne() {
    console.log("Task 1 completed");
  }
  
  function taskTwo(callback) {
    console.log("Task 2 completed");
    callback(); // execute the callback function after Task 2
  }
  
  // Call taskTwo and pass taskOne as a callback
  taskTwo(taskOne);
  