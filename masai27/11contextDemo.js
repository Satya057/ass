// 1. Declare a global variable `age` and assign a value to it
let age = 25;

// 2. Function in the global execution context to display `age`
function displayAge() {
    console.log("Current age (from displayAge):", age); // Accesses global `age`
}

// 3. Function to modify the global `age` variable
function changeAge() {
    age = 30; // Updates the global `age`
    console.log("Age updated (inside changeAge):", age);
}

// Initial call to show global context
displayAge(); // Output: "Current age: 25"

// Modify and verify the global variable
changeAge();  // Output: "Age updated: 30"
displayAge(); // Output: "Current age: 30" (shows updated value)