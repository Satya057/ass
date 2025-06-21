// L0 - Asynchronous Timer with Callback
// Problem Statement: Create a function timer that takes a duration in milliseconds and a callback 
// function onComplete. The function should use setTimeout to simulate a countdown, and when the 
// timer ends, it should execute the onComplete callback with a message: "Timer of <duration> ms finished".
//
// Steps:
// 1. Define timer that accepts duration and onComplete.
// 2. Use setTimeout to delay for duration, then call onComplete with the finish message.

function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Test the timer function
console.log("Starting timer...");
timer(2000, (message) => {
  console.log(message);
});

// Additional test cases
timer(1000, (message) => {
  console.log(message);
});

timer(3000, (message) => {
  console.log(message);
}); 