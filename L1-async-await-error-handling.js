// L1 - Simulating Asynchronous Data Fetching with Error Handling Using Async/Await
// Problem Statement: You are tasked with simulating a data fetching function that occasionally fails. 
// The goal is to:
// 1. Write a function fetchData that simulates data fetching using a Promise with a 50% chance of success or failure.
// 2. Write an async function fetchDataHandler to:
//    - Use async/await to handle the result of the fetchData function.
//    - Log "Fetched data successfully!" if the fetch is successful.
//    - Log "Error fetching data" along with the error message if the fetch fails.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      
      if (randomNumber > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network error occurred");
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log("Result:", result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Simulate the workflow multiple times to see both success and failure cases
console.log("=== First Attempt ===");
fetchDataHandler();

// Second attempt after a delay
setTimeout(() => {
  console.log("\n=== Second Attempt ===");
  fetchDataHandler();
}, 2000);

// Third attempt after another delay
setTimeout(() => {
  console.log("\n=== Third Attempt ===");
  fetchDataHandler();
}, 4000); 