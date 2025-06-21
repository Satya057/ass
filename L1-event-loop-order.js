 
console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

// Explanation of execution order:
console.log("\n=== Event Loop Explanation ===");
console.log("1. 'Begin' - Synchronous code executes immediately");
console.log("2. 'End' - Synchronous code executes immediately");
console.log("3. 'Promise Task' - Microtask (Promise) executes before next tick");
console.log("4. 'Timeout Task' - Macrotask (setTimeout) executes after microtasks");
console.log("\nEvent Loop Priority: Synchronous > Microtasks > Macrotasks"); 