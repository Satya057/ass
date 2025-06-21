// L1 - Simulating a Loading Screen with setInterval
// Problem Statement: Create a JavaScript program that simulates a loading screen using setInterval. 
// The program should:
// 1. Start by logging "Loading..." every 1 second.
// 2. After 5 seconds, stop the loading messages and log "Loaded successfully!".
// 3. Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.

let loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000); 