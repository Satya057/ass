function startTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "Task A completed";
      console.log(result);
      resolve(result);
    }, 1000);
  });
}

function processTask(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Task B processed: ${previousResult}`;
      console.log(result);
      resolve(result);
    }, 1500);
  });
}

function finalizeTask(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Final result: ${previousResult}`;
      console.log(result);
      resolve(result);
    }, 500);
  });
}

// Execute the promise chain
startTask()
  .then(processTask)
  .then(finalizeTask)
  .catch((error) => {
    console.error("Error in workflow:", error);
  });

module.exports = { startTask, processTask, finalizeTask };